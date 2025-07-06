#!/usr/bin/env node

import * as isEmpty from 'lodash.isempty';
import * as orderBy from 'lodash.orderby';
import * as chalk from 'chalk';
import * as debugModule from 'debug';
import * as fs from 'node:fs';
import * as Handlebars from 'handlebars';
import * as marked from 'marked';
import * as path from 'node:path';
import {
  addIssueDataToPatch,
  getUpgrades,
  IacProjectType,
  severityMap,
} from './vuln';
import { processSourceCode, processSuppression } from './codeutil';
import { formatDateTime } from './dateutil';
import { registerHandlebarsHelpers } from './handlebarsutil';

registerHandlebarsHelpers();

const debug = debugModule('snyk-to-html');

const defaultRemediationText =
  '## Remediation\nThere is no remediation at the moment';

function readFile(filePath: fs.PathOrFileDescriptor): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

function handleInvalidJson(reason: any) {
  if (reason.isInvalidJson) {
    reason.message =
      reason.message +
      'Error running `snyk-to-html`. Please check you are providing the correct parameters. ' +
      'Is the issue persists contact support@snyk.io';
  }
  console.log(reason.message);
}

function promisedParseJSON(json: string): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      resolve(JSON.parse(json));
    } catch (error) {
      if (error instanceof Error) {
        error.message = chalk.red.bold(
          'The source provided is not a valid json! Please validate that the input provided to the CLI is an actual JSON\n\n' +
            'Tip: To find more information, try running `snyk-to-html` in debug mode by appending to the CLI the `-d` parameter\n\n',
        );
        debug(`Input provided to the CLI: \n${json}\n\n`);
        (error as any).isInvalidJson = true;
        reject(error);
      } else {
        reject(new Error('An unknown error occurred'));
      }
    }
  });
}

class SnykToHtml {
  public static run(
    dataSource: string,
    remediation: boolean,
    hbsTemplate: string,
    summary: boolean,
    reportCallback: (value: string) => void,
  ): void {
    SnykToHtml.runAsync(dataSource, remediation, hbsTemplate, summary)
      .then(reportCallback)
      .catch(handleInvalidJson);
  }

  public static async runAsync(
    source: string,
    remediation: boolean,
    template: string,
    summary: boolean,
  ): Promise<string> {
    const promisedString = source ? readFile(source) : readInputFromStdin();
    return promisedString.then(promisedParseJSON).then((data: any) => {
      if (
        data?.infrastructureAsCodeIssues ||
        data[0]?.infrastructureAsCodeIssues
      ) {
        // for IaC input we need to change the default template to an IaC specific template
        // at the same time we also want to support the -t / --template flag
        template =
          template === path.join(__dirname, '../../template/test-report.hbs')
            ? path.join(__dirname, '../../template/iac/test-report.hbs')
            : template;
        return processIacData(data, template, summary);
      } else if (data?.runs && data?.runs[0].tool.driver.name === 'SnykCode') {
        template =
          template === path.join(__dirname, '../../template/test-report.hbs')
            ? path.join(__dirname, '../../template/code/test-report.hbs')
            : template;
        return processCodeData(data, template, summary);
      } else if (data.docker) {
        return processContainerData(data, remediation, template, summary);
      } else {
        return processData(data, remediation, template, summary);
      }
    });
  }
}

function metadataForVuln(vuln: any) {
  const { cveSpaced, cveLineBreaks } = concatenateCVEs(vuln);

  return {
    id: vuln.id,
    title: vuln.title,
    name: vuln.name,
    info: vuln.info || 'No information available.',
    severity: vuln.severity,
    severityValue: severityMap[vuln.severity],
    riskScore: typeof vuln.riskScore === 'number' ? vuln.riskScore : undefined,
    description: vuln.description || 'No description available.',
    fixedIn: vuln.fixedIn,
    packageManager: vuln.packageManager,
    version: vuln.version,
    cvssScore: vuln.cvssScore,
    cveSpaced: cveSpaced || 'No CVE found.',
    cveLineBreaks: cveLineBreaks || 'No CVE found.',
    disclosureTime: dateFromDateTimeString(vuln.disclosureTime || ''),
    publicationTime: dateFromDateTimeString(vuln.publicationTime || ''),
    license: vuln.license || undefined,
  };
}

function concatenateCVEs(vuln: any) {
  let cveSpaced = '';
  let cveLineBreaks = '';

  if (vuln.identifiers) {
    vuln.identifiers.CVE.forEach(function (c) {
      const cveLink = `<a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=${c}">${c}</a>`;
      cveSpaced += `${cveLink}&nbsp;`;
      cveLineBreaks += `${cveLink}</br>`;
    });
  }

  return { cveSpaced, cveLineBreaks };
}

function dateFromDateTimeString(dateTimeString: string) {
  return dateTimeString.substr(0, 10);
}

function groupVulns(vulns) {
  const result = {};
  let uniqueCount = 0;
  let pathsCount = 0;

  if (vulns && Array.isArray(vulns)) {
    vulns.map((vuln) => {
      if (!result[vuln.id]) {
        result[vuln.id] = { list: [vuln], metadata: metadataForVuln(vuln) };
        pathsCount++;
        uniqueCount++;
      } else {
        result[vuln.id].list.push(vuln);
        pathsCount++;
      }
    });
  }

  return {
    vulnerabilities: result,
    vulnerabilitiesUniqueCount: uniqueCount,
    vulnerabilitiesPathsCount: pathsCount,
  };
}

async function compileTemplate(
  fileName: fs.PathLike,
): Promise<HandlebarsTemplateDelegate> {
  const fileContent = fs.readFileSync(fileName, { encoding: 'utf8' });
  return Handlebars.compile(fileContent);
}

async function registerPeerPartial(
  templatePath: string,
  name: string,
): Promise<void> {
  const dir = path.dirname(templatePath);
  const file = path.join(dir, `test-report.${name}.hbs`);
  const template = await compileTemplate(file);
  Handlebars.registerPartial(name, template);
}

async function generateTemplate(
  data: any,
  template: string,
  showRemediation: boolean,
  summary: boolean,
): Promise<string> {
  if (showRemediation && data.remediation) {
    data.showRemediations = showRemediation;
    const { upgrade, pin, unresolved, patch } = data.remediation;
    data.anyRemediations =
      !isEmpty(upgrade) || !isEmpty(patch) || !isEmpty(pin);
    data.anyUnresolved = !!unresolved?.vulnerabilities;
    data.unresolved = groupVulns(unresolved);
    data.upgrades = getUpgrades(upgrade, data.vulnerabilities);
    data.pins = getUpgrades(pin, data.vulnerabilities);
    data.patches = addIssueDataToPatch(patch, data.vulnerabilities);
  }
  const vulnMetadata = groupVulns(data.vulnerabilities);
  const sortedVulns = orderBy(
    vulnMetadata.vulnerabilities,
    ['metadata.severityValue', 'metadata.name'],
    ['desc', 'desc'],
  );
  data.hasMetatableData =
    !!data.projectName || !!data.path || !!data.displayTargetFile;
  data.vulnerabilities = sortedVulns;
  data.uniqueCount = vulnMetadata.vulnerabilitiesUniqueCount;
  data.summary =
    vulnMetadata.vulnerabilitiesPathsCount + ' vulnerable dependency paths';
  data.showSummaryOnly = summary;
  if (data.paths?.length === 1) {
    data.packageManager = data.paths[0].packageManager;
  }

  await registerPeerPartial(template, 'inline-css');
  await registerPeerPartial(template, 'header');
  await registerPeerPartial(template, 'metatable-css');
  await registerPeerPartial(template, 'metatable');
  await registerPeerPartial(template, 'inline-js');
  await registerPeerPartial(template, 'vuln-card');
  await registerPeerPartial(template, 'remediation-css');
  await registerPeerPartial(template, 'actionable-remediations');

  const htmlTemplate = await compileTemplate(template);
  return htmlTemplate(data);
}

async function generateIacTemplate(
  data: any,
  template: string,
): Promise<string> {
  await registerPeerPartial(template, 'inline-css');
  await registerPeerPartial(template, 'header');
  await registerPeerPartial(template, 'metatable-css');
  await registerPeerPartial(template, 'metatable');
  await registerPeerPartial(template, 'inline-js');
  await registerPeerPartial(template, 'vuln-card');

  const htmlTemplate = await compileTemplate(template);

  return htmlTemplate(data);
}

async function generateCodeTemplate(
  data: any,
  template: string,
): Promise<string> {
  await registerPeerPartial(template, 'inline-css');
  await registerPeerPartial(template, 'inline-js');
  await registerPeerPartial(template, 'header');
  await registerPeerPartial(template, 'metatable-css');
  await registerPeerPartial(template, 'metatable');
  await registerPeerPartial(template, 'code-snip');

  const htmlTemplate = await compileTemplate(template);

  return htmlTemplate(data);
}

function mergeData(dataArray: any[]): any {
  const vulnsArrays = dataArray.map((project) => {
    if (!project.vulnerabilities) {
      return [];
    }

    // Add project data to each of the vulnerabilities to display more
    // details on each vulnerability card, in order to properly distinguish
    // from which project a vuln is connected, in case of displaying multiple
    // projects.
    const vulns = project.vulnerabilities.map((vuln) => ({
      ...vuln,
      displayTargetFile: project.displayTargetFile,
      path: project.path,
    }));
    return vulns;
  });
  const aggregateVulnerabilities = [].concat(...vulnsArrays);

  const totalUniqueCount = dataArray.reduce(
    (acc, item) => acc + item.vulnerabilities.length || 0,
    0,
  );
  const totalDepCount = dataArray.reduce(
    (acc, item) => acc + item.dependencyCount || 0,
    0,
  );

  const paths = dataArray.map((project) => ({
    path: project.path,
    packageManager: project.packageManager,
    displayTargetFile: project.displayTargetFile,
  }));

  return {
    vulnerabilities: aggregateVulnerabilities,
    uniqueCount: totalUniqueCount,
    summary: aggregateVulnerabilities.length + ' vulnerable dependency paths',
    dependencyCount: totalDepCount,
    paths,
  };
}

async function processData(
  data: any,
  remediation: boolean,
  template: string,
  summary: boolean,
): Promise<string> {
  const mergedData = Array.isArray(data) ? mergeData(data) : data;
  return generateTemplate(mergedData, template, remediation, summary);
}

async function processIacData(
  data: any,
  template: string,
  summary: boolean,
): Promise<string> {
  if (data.error) {
    return generateIacTemplate(data, template);
  }

  const dataArray = Array.isArray(data) ? data : [data];
  dataArray.forEach((project) => {
    project.infrastructureAsCodeIssues.forEach((issue) => {
      issue.severityValue = severityMap[issue.severity];
    });
  });
  const projectsArrays = dataArray.map((project) => {
    return {
      targetFile: project.targetFile,
      targetFilePath: project.targetFilePath,
      projectType: IacProjectType[project.projectType],
      infrastructureAsCodeIssues: orderBy(
        project.infrastructureAsCodeIssues,
        ['severityValue', 'title'],
        ['desc', 'asc'],
      ),
    };
  });
  const totalIssues = projectsArrays.reduce(
    (acc, item) => acc + item.infrastructureAsCodeIssues.length || 0,
    0,
  );

  const processedData = {
    projects: projectsArrays,
    showSummaryOnly: summary,
    totalIssues,
  };

  return generateIacTemplate(processedData, template);
}

async function processCodeData(
  data: any,
  template: string,
  summary: boolean,
): Promise<string> {
  if (data.error) {
    return generateCodeTemplate(data, template);
  }
  const dataArray = Array.isArray(data) ? data : [data];

  const OrderedIssuesArray = await processSourceCode(dataArray);

  // Sort issues by suppressed and non-suppressed vulnerabilities
  OrderedIssuesArray.forEach((project) => {
    let hasSuppressedVulns = false;
    const projectVulns = project.vulnerabilities.map((vuln) => {
      if (vuln.suppressions && vuln.suppressions.length > 0) {
        hasSuppressedVulns = true;
        vuln.suppression = processSuppression(vuln.suppressions[0]);
      }
      return vuln;
    });

    // Early return if no suppressions
    if (!hasSuppressedVulns) {
      project.vulnerabilities = projectVulns;
      return;
    }

    // If not, sort the suppressed vulnerabilities to the end
    projectVulns.sort((a, b) => {
      if (a.suppression && !b.suppression) return 1;
      if (!a.suppression && b.suppression) return -1;
      return 0;
    });

    project.vulnerabilities = projectVulns;
  });

  const totalIssues = dataArray[0].runs[0].results.length;
  const processedData = {
    projects: OrderedIssuesArray,
    showSummaryOnly: summary,
    totalIssues,
  };
  return generateCodeTemplate(processedData, template);
}

async function processContainerData(
  data: any,
  remediation: boolean,
  template: string,
  summary: boolean,
): Promise<string> {
  if (
    !Array.isArray(data) &&
    data.applications &&
    Array.isArray(data.applications)
  ) {
    const AppData = data.applications;
    delete data.applications;
    data = [data, ...AppData];
  }
  return processData(data, remediation, template, summary);
}

async function readInputFromStdin(): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    let jsonString = '';
    process.stdin.setEncoding('utf8');
    process.stdin.on('readable', () => {
      const chunk = process.stdin.read();
      if (chunk !== null) {
        jsonString += chunk;
      }
    });
    process.stdin.on('error', reject);
    process.stdin.on('end', () => resolve(jsonString));
  });
}

// handlebar helpers
const hh = {
  markdown: marked.parse,
  moment: (date, format) => formatDateTime(date, format),
  count: (data) => data && data.length,
  dump: (data, spacer) => JSON.stringify(data, null, spacer || null),
  // block helpers
  isDoubleArray: function (data, options) {
    return Array.isArray(data[0]) ? options.fn(data) : options.inverse(data);
  },
  if_eq: function (this: void, a, b, opts) {
    return a === b ? opts.fn(this) : opts.inverse(this);
  },
  if_gt: function (this: void, a, b, opts) {
    return a > b ? opts.fn(this) : opts.inverse(this);
  },
  if_not_eq: function (this: void, a, b, opts) {
    return a !== b ? opts.fn(this) : opts.inverse(this);
  },
  if_any: function (this: void, opts, ...args) {
    return args.some((v) => !!v) ? opts.fn(this) : opts.inverse(this);
  },
  ifCond: function (this: void, v1, operator, v2, options) {
    const choose = (pred: boolean) =>
      pred ? options.fn(this) : options.inverse(this);
    switch (operator) {
      // tslint:disable-next-line:triple-equals
      case '==':
        return choose(v1 == v2);
      case '===':
        return choose(v1 === v2);
      case '<':
        return choose(v1 < v2);
      case '<=':
        return choose(v1 <= v2);
      case '>':
        return choose(v1 > v2);
      case '>=':
        return choose(v1 >= v2);
      case '&&':
        return choose(v1 && v2);
      case '||':
        return choose(v1 || v2);
      default:
        return choose(false);
    }
  },
  getRemediation: (description, fixedIn) => {
    // check remediation in the description
    const index = description.indexOf('## Remediation');
    if (index > -1) {
      return marked.parse(description.substring(index));
    }
    // if no remediation in description, try to check in `fixedIn` attribute
    if (Array.isArray(fixedIn) && fixedIn.length) {
      const fixedInJoined = fixedIn.join(', ');
      return marked.parse(`## Remediation\n Fixed in: ${fixedInJoined}`);
    }

    // otherwise, fallback to default message, i.e. No remediation at the moment
    return marked.parse(defaultRemediationText);
  },
  severityLabel: (severity: string) => {
    return severity[0].toUpperCase();
  },
  startsWith: function (str, start, options) {
    return str.startsWith(start) ? options.fn(this) : options.inverse(this);
  },
};

Object.keys(hh).forEach((k) => Handlebars.registerHelper(k, hh[k]));

export { SnykToHtml };

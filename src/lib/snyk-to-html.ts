#!/usr/bin/env node

import fs = require('fs');
import Handlebars = require('handlebars');
import marked = require('marked');
import moment = require('moment');
import path = require('path');

const severityMap = { low: 0, medium: 1, high: 2 };

// Read File
function readFile(filePath: string, encoding: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    fs.readFile(filePath, encoding, (err, data) => {
      if (err) { reject(err); }
      resolve(data);
    });
  });
}


class SnykToHtml {
  public static run(dataSource: string, hbsTemplate: string, reportCallback: (value: string) => void): void {
    SnykToHtml
      .runAsync(dataSource, hbsTemplate)
      .then(reportCallback)
      .catch(console.log);
  }

  public static async runAsync(source: string, template: string): Promise<string> {
    const promisedString = source ? readFile(source, 'utf8') : readInputFromStdin();
    const report = promisedString
      .then(JSON.parse)
      .then(data => processData(data, template));
    return report;
  }
}

export { SnykToHtml };

// Meta Data For Vuln
function metadataForVuln(vuln: any) {
  return {
    id: vuln.id,
    title: vuln.title,
    name: vuln.name,
    info: vuln.info || 'No information available.',
    severity: vuln.severity,
    severityValue: severityMap[vuln.severity],
    description: vuln.description || 'No description available.',
    packageManager: vuln.packageManager,
  };
}

// Group Vulns
function groupVulns(vulns) {
  const result = {};
  let uniqueCount = 0;
  let pathsCount = 0;

  if (vulns && Array.isArray(vulns)) {
    vulns.map(vuln => {
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

// Compile Template
async function compileTemplate(fileName: string): Promise<HandlebarsTemplateDelegate> {
  return readFile(fileName, 'utf8').then(Handlebars.compile);
}

async function registerPeerPartial(templatePath: string, name: string): Promise<void> {
  const dir = path.dirname(templatePath);
  const file = path.join(dir, `test-report.${name}.hbs`);
  const template = await compileTemplate(file);
  Handlebars.registerPartial(name, template);
}

// Generate Template
async function generateTemplate(data: any, template: string): Promise<string> {
  const vulnMetadata = groupVulns(data.vulnerabilities);
  data.vulnerabilities = vulnMetadata.vulnerabilities;
  data.uniqueCount = vulnMetadata.vulnerabilitiesUniqueCount;
  data.summary = vulnMetadata.vulnerabilitiesPathsCount + ' vulnerable dependency paths';

  await registerPeerPartial(template, 'inline-css');
  await registerPeerPartial(template, 'vuln-card');

  const htmlTemplate = await compileTemplate(template);
  return htmlTemplate(data);
}

// Merge Data
function mergeData(dataArray: any[]): any {
  const vulnsArrays = dataArray.map(project => project.vulnerabilities || []);
  const aggregateVulnerabilities = [].concat(...vulnsArrays);

  const totalUniqueCount =
    dataArray.reduce((acc, item) => acc + item.vulnerabilities.length || 0, 0);
  const totalDepCount =
    dataArray.reduce((acc, item) => acc + item.dependencyCount || 0, 0);

  const paths = dataArray.map(project => ({ path: project.path, packageManager: project.packageManager }));

  return {
    vulnerabilities: aggregateVulnerabilities,
    uniqueCount: totalUniqueCount,
    summary: aggregateVulnerabilities.length + ' vulnerable dependency paths',
    dependencyCount: totalDepCount,
    paths,
  };
}

// Process Data
async function processData(data: any, template: string): Promise<string> {
  const mergedData = Array.isArray(data) ? mergeData(data) : data;
  return generateTemplate(mergedData, template);
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
  markdown: marked,
  moment: (date, format) => moment.utc(date).format(format),
  count: data => data && data.length,
  dump: (data, spacer) => JSON.stringify(data, null, spacer || null),
  // block helpers
  /* tslint:disable:only-arrow-functions */
  /* tslint:disable:object-literal-shorthand */
  isDoubleArray: function(data, options) {
    return Array.isArray(data[0]) ? options.fn(data) : options.inverse(data);
  },
  if_eq: function(this: void, a, b, opts) {
    return (a === b) ? opts.fn(this) : opts.inverse(this);
  },
  if_any: function(this: void, opts, ...args) {
    return args.some(v => !!v) ? opts.fn(this) : opts.inverse(this);
  },
  ifCond: function(this: void, v1, operator, v2, options) {
    const choose = (pred: boolean) => pred ? options.fn(this) : options.inverse(this);
    switch (operator) {
      // tslint:disable-next-line:triple-equals
      case '==': return choose(v1 == v2);
      case '===': return choose(v1 === v2);
      case '<': return choose(v1 < v2);
      case '<=': return choose(v1 <= v2);
      case '>': return choose(v1 > v2);
      case '>=': return choose(v1 >= v2);
      case '&&': return choose(v1 && v2);
      case '||': return choose(v1 || v2);
      default: return choose(false);
    }
  },
};

Object.keys(hh).forEach(k => Handlebars.registerHelper(k, hh[k]));

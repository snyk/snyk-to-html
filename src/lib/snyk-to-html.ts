#!/usr/bin/env node

import fs = require('fs');
import Handlebars = require('handlebars');
import marked = require('marked');
import moment = require('moment');
import path = require('path');
import util = require('util');

const severityMap = {low: 0, medium: 1, high: 2};

const readFile = util.promisify(fs.readFile);

class SnykToHtml {
  public static run(dataSource: string, hbsTemplate: string, reportCallback: (value: string | void) => void): void {
    SnykToHtml.runAsync(dataSource, hbsTemplate).then(reportCallback);
  }

  public static runAsync(source: string, template: string): Promise<string | void> {
    const promisedString = source ? readFile(source, 'utf8') : readInputFromStdin();
    const output = promisedString
      .then(JSON.parse)
      .then(data => processData(data, template))
      .catch (error => console.log(error));
    return output;
  }
}

export { SnykToHtml };

function metadataForVuln(vuln: any) {
  return {
    id: vuln.id,
    title: vuln.title,
    name: vuln.name,
    info: vuln.info || 'No information available.',
    severity: vuln.severity,
    severityValue: severityMap[vuln.severity],
    description: vuln.description || 'No description available.',
  };
}

function groupVulns(vulns) {
  const result = {};
  if (!vulns || typeof vulns.length === 'undefined') {
    return result;
  }
  vulns.map( vuln => {
    if (!result[vuln.id]) {
      result[vuln.id] = {list: [vuln], metadata: metadataForVuln(vuln)};
    } else {
      result[vuln.id].list.push(vuln);
    }
  });
  return result;
}

async function compileTemplate(fileName: string): Promise<HandlebarsTemplateDelegate> {
  return readFile(fileName, 'utf8').then(Handlebars.compile);
}

async function generateTemplate(data: any, template: string): Promise<string> {
  data.vulnerabilities = groupVulns(data.vulnerabilities);
  const cssFile = path.join(
    path.dirname(template),
    'test-report.inline-css.hbs',
    );

  const cssTemplate = await compileTemplate(cssFile);
  Handlebars.registerPartial('inline-css', cssTemplate);
  const htmlTemplate = await compileTemplate(template);
  return htmlTemplate(data);
}

function mergeData(dataArray: any[]): any {
  const vulnsArrays = dataArray.map(d => d.vulnerabilities || []);
  const aggregateVulnerabilities = [].concat(...vulnsArrays);

  const totalUniqueCount =
    dataArray.reduce((acc, item) => acc + item.uniqueCount || 0, 0);
  const totalDepCount =
    dataArray.reduce((acc, item) => acc + item.dependencyCount || 0, 0);

  const paths = dataArray.map(d => d.path);

  return {
    vulnerabilities: aggregateVulnerabilities,
    uniqueCount: totalUniqueCount,
    summary: aggregateVulnerabilities.length + ' vulnerable dependency paths',
    dependencyCount: totalDepCount,
    paths,
  };
}

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
    process.stdin.on('error', err => reject(err));
    process.stdin.on('end', () => resolve(jsonString));
  });
}

// handlebar simple helpers
Handlebars.registerHelper('markdown', source => marked(source));

Handlebars.registerHelper('moment', (date, format) => moment.utc(date).format(format));

Handlebars.registerHelper('count', data => data && data.length);

Handlebars.registerHelper('dump', (data, spacer) => JSON.stringify(data, null, spacer || null));

// handlebar block helpers
/* tslint:disable:only-arrow-functions */
Handlebars.registerHelper('isDoubleArray', function(data, options) {
  return Array.isArray(data[0]) ? options.fn(data) : options.inverse(data);
});

Handlebars.registerHelper('if_eq', function(this: void, a, b, opts) {
  return (a === b) ? opts.fn(this) : opts.inverse(this);
});

Handlebars.registerHelper('if_any', function(this: void, opts, ...args) {
  return args.some(v => !!v) ?
    opts.fn(this) :
    opts.inverse(this);
});

Handlebars.registerHelper('ifCond', function(this: void, v1, operator, v2, options) {
  switch (operator) {
    case '==': {
      // tslint:disable-next-line:triple-equals
      return (v1 == v2) ? options.fn(this) // jshint ignore:line
                        : options.inverse(this);
    }
    case '===': {
      return (v1 === v2) ? options.fn(this) : options.inverse(this);
    }
    case '<': {
      return (v1 < v2) ? options.fn(this) : options.inverse(this);
    }
    case '<=': {
      return (v1 <= v2) ? options.fn(this) : options.inverse(this);
    }
    case '>': {
      return (v1 > v2) ? options.fn(this) : options.inverse(this);
    }
    case '>=': {
      return (v1 >= v2) ? options.fn(this) : options.inverse(this);
    }
    case '&&': {
      return (v1 && v2) ? options.fn(this) : options.inverse(this);
    }
    case '||': {
      return (v1 || v2) ? options.fn(this) : options.inverse(this);
    }
    default: {
      return options.inverse(this);
    }
  }
});

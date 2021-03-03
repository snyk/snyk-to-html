#!/usr/bin/env node

import program = require('commander');
import debugModule = require('debug');
import fs = require('fs');
import path = require('path');
import { SnykToHtml } from './lib/snyk-to-html';

program
  .option(
    '-t, --template <path>',
    'Template location for generating the html. Defaults to template/test-report.hbs',
  )
  .option(
    '-i, --input <path>',
    'Input path from where to read the json. Defaults to stdin',
  )
  .option(
    '-o, --output <path>',
    'Output of the resulting HTML. Example: -o snyk.html. Defaults to stdout',
  )
  .option(
    '-s, --summary',
    'Generates an HTML with only the summary, instead of the details report',
  )
  .option('-d, --debug', 'Runs the CLI in debug mode')
  .option(
    '-a, --actionable-remediation',
    'Display actionable remediation info if available',
  )
  .parse(process.argv);

let template;
let source;
let output;

if (program.template) {
  // template
  template = program.template; // grab the next item
  if (typeof template === 'boolean') {
    if (program.actionableRemediation) {
      template = path.join(__dirname, '../template/remediation-report.hbs');
    } else {
      template = path.join(__dirname, '../template/test-report.hbs');
    }
  }
} else {
  if (program.actionableRemediation) {
    template = path.join(__dirname, '../template/remediation-report.hbs');
  } else {
    template = path.join(__dirname, '../template/test-report.hbs');
  }
}
if (program.input) {
  // input source
  source = program.input; // grab the next item
  if (typeof source === 'boolean') {
    source = undefined;
  }
}
if (program.output) {
  // output destination
  output = program.output; // grab the next item
  if (typeof output === 'boolean') {
    output = undefined;
  }
}

if (program.debug) {
  const nameSpace = 'snyk-to-html';
  process.env.DEBUG = nameSpace;

  debugModule.enable(nameSpace);
}

SnykToHtml.run(
  source,
  !!program.actionableRemediation,
  template,
  !!program.summary,
  onReportOutput,
);

function onReportOutput(report: string): void {
  if (output) {
    try {
      fs.writeFileSync(output, report);
      console.log('Vulnerability snapshot saved at ' + output);
    } catch (err) {
      return console.log(err);
    }
  } else {
    console.log(report);
  }
}

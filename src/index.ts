#!/usr/bin/env node

import { Command } from 'commander';
import * as debugModule from 'debug';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { SnykToHtml } from './lib/snyk-to-html';

const program = new Command();

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
  );

program.parse(process.argv);

const options = program.opts();

let template;
let source;
let output;

if (options.template) {
  template = options.template;
  if (typeof template === 'boolean') {
    if (options.actionableRemediation) {
      template = path.join(__dirname, '../template/remediation-report.hbs');
    } else {
      template = path.join(__dirname, '../template/test-report.hbs');
    }
  }
} else {
  if (options.actionableRemediation) {
    template = path.join(__dirname, '../template/remediation-report.hbs');
  } else {
    template = path.join(__dirname, '../template/test-report.hbs');
  }
}
if (options.input) {
  source = options.input;
  if (typeof source === 'boolean') {
    source = undefined;
  }
}
if (options.output) {
  output = options.output;
  if (typeof output === 'boolean') {
    output = undefined;
  }
}

if (options.debug) {
  const nameSpace = 'snyk-to-html';
  process.env.DEBUG = nameSpace;

  debugModule.enable(nameSpace);
}

SnykToHtml.run(
  source,
  !!options.actionableRemediation,
  template,
  !!options.summary,
  onReportOutput,
);

function onReportOutput(report: string): void {
  if (output) {
    try {
      fs.writeFileSync(output, report);
      console.log('Vulnerability snapshot saved at ' + output);
    } catch (error) {
      return console.log(error);
    }
  } else {
    console.log(report);
  }
}

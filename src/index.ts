#!/usr/bin/env node

import fs = require('fs');
import minimist = require('minimist');
import path = require('path');
import { SnykToHtml } from './lib/snyk-to-html';

const argv = minimist(process.argv.slice(2));

let template;
let source;
let output;

if (argv.t) { // template
  template = argv.t; // grab the next item
  if (typeof template === 'boolean') {
    template = path.join(__dirname, '../template/test-report.hbs');
  }
} else {
  template = path.join(__dirname, '../template/test-report.hbs');
}
if (argv.i) { // input source
  source = argv.i; // grab the next item
  if (typeof source === 'boolean') {
    source = undefined;
  }
}
if (argv.o) { // output destination
  output = argv.o; // grab the next item
  if (typeof output === 'boolean') {
    output = undefined;
  }
}

SnykToHtml.run(source, template, onReportOutput);

function onReportOutput(report: string | void): void {
  if (output) {
    fs.writeFile(output, report, err => {
      if (err) {
        return console.log(err);
      }
      console.log('Vulnerability snapshot saved at ' + output);
    });
  } else {
    console.log(report);
  }
}

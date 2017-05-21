#!/usr/bin/env node

var fs = require('fs');
var snykToHtml = require('./lib/snyk-to-html.js');
var argv = require('minimist')(process.argv.slice(2));

var template, source, output;

if (argv.t) { // template
  template = argv.t; // grab the next item
  if (typeof template === 'boolean') {
    template = __dirname + '/template/test-report.hbs';
  }
} else {
  template = __dirname + '/template/test-report.hbs';
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

snykToHtml.run(source, template, onReportOutput);

function onReportOutput(report) {
  if (output) {
    fs.writeFile(output, report, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log('Vulnerability snapshot saved at ' + output);
    });
  } else {
    console.log(report);
  }
}

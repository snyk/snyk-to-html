#!/usr/bin/env node

var fs = require("fs");
var Handlebars = require("handlebars");
var marked = require('marked');
var moment = require('moment');
var argv = require('minimist')(process.argv.slice(2));
var output, template, source;

if(argv['t']){ //template
  template = argv['t']; //grab the next item
} else {
  template = __dirname + "/template/test-report.hbs";
}
if(argv['i']){ //input source
  source = argv['i']; //grab the next item
}
if(argv['o']){ //output destination
  output = argv['o']; //grab the next item
}

var htmlTemplate = fs.readFileSync(template, 'utf8');
var hbTemplate = Handlebars.compile(htmlTemplate);
var severityMap = {low: 0, medium: 1, high: 2};

function metadataForVuln(vuln) {
  // Handling empty description cases
  var description = vuln.description?vuln.description:"No description available.";

 return {
   id: vuln.id,
   title: vuln.title,
   name: vuln.name,
   info: vuln.info,
   severity: vuln.severity,
   severityValue: severityMap[vuln.severity],
   description: description,
 };
}

function groupVulns(vulns) {
  var result = {};
  if (!vulns || typeof vulns.length === 'undefined') {
    return result;
  }
  for (var i = 0; i < vulns.length; i++) {
    if (!result[vulns[i].id]) {
      result[vulns[i].id] = {};
      result[vulns[i].id].list = [];
      result[vulns[i].id].metadata = metadataForVuln(vulns[i]);
    }
    result[vulns[i].id].list.push(vulns[i]);
  }
  return result;
}

function generateTemplate(data) {
  data.vulnerabilities = groupVulns(data.vulnerabilities);
  return hbTemplate(data);
}

function onDataCallback(data) {
  var template = generateTemplate(data);
  if (output) {
    fs.writeFile(output, template, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log('Vulnerability snapshot saved at ' + output);
    });
  } else {
    console.log(template);
  }
}

function readInputFromFile(source) {
  fs.readFile(source, 'utf8', function(err, data) {
    if (err) throw err;
    onDataCallback(JSON.parse(data));
  });
}

function readInputFromStdin() {
  var data = '';
  process.stdin.setEncoding('utf8');
  process.stdin.on('readable', function() {
    var chunk = process.stdin.read();
    if (chunk !== null) {
      data += chunk;
    }
  });
  process.stdin.on('end', function() {
    onDataCallback(JSON.parse(data));
  });
}

function run() {
  if (source) {
    readInputFromFile(source, onDataCallback);
  } else {
    readInputFromStdin();
  }
}

run();

// handlebar helpers
Handlebars.registerHelper('markdown', function (source) {
  return marked(source);
});

Handlebars.registerHelper('moment', function (date, format) {
  return moment.utc(date).format(format);
});

Handlebars.registerHelper('isDoubleArray', function (data, options) {
  return Array.isArray(data[0]) ? options.fn(data) : options.inverse(data);
});

Handlebars.registerHelper('if_eq', function (a, b, opts) {
  return (a === b) ? opts.fn(this) : opts.inverse(this);
});

Handlebars.registerHelper('count', function (data) {
  return data && data.length;
});

Handlebars.registerHelper('dump', function (data, spacer) {
    return JSON.stringify(data, null, spacer || null);
});

Handlebars.registerHelper('if_any', function () { // important: not an arrow fn
  var args = [].slice.call(arguments);
  var opts = args.pop();

  return args.some(function(v) {return !!v;}) ?
    opts.fn(this) :
    opts.inverse(this);
});

Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
  switch (operator) {
    case '==': {
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

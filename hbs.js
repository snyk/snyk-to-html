var fs = require('fs');
var Handlebars = require('Handlebars');
var htmlTemplate = fs.readFileSync('./template/test-report.hbs', 'utf8');
var marked = require('marked');
var moment = require('moment');
var hbTemplate = Handlebars.compile(htmlTemplate);
var severityMap = {low: 0, medium: 1, high: 2};

function metadataForVuln(vuln) {
 return {
   id: vuln.id,
   title: vuln.title,
   name: vuln.name,
   info: vuln.info,
   severity: vuln.severity,
   severityValue: severityMap[vuln.severity],
   description: vuln.description,
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

fs.readFile('./data/test-report.json', 'utf8', (err, data) => {
 if (err) throw err;
 data = JSON.parse(data);
 data.vulnerabilities = groupVulns(data.vulnerabilities);
//  console.log(JSON.stringify(data));
 var result = hbTemplate(data);
 console.log(result);
});

Handlebars.registerHelper('markdown', function (source) {
  return marked(source);
});

Handlebars.registerHelper('moment', function (date, format) {
  return moment.utc(date).format(format);
});

Handlebars.registerHelper('fullDate', function (date) {
  return moment.utc(date).format('DD MMM, YYYY');
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

  return args.some(v => !!v) ? opts.fn(this) : opts.inverse(this);
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

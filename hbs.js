const fs = require('fs');
const Handlebars = require('Handlebars');
const htmlTemplate = fs.readFileSync('./index.hbs', 'utf8');
const marked = require('marked');
const moment = require('moment');
const hbTemplate = Handlebars.compile(htmlTemplate);
const severityMap = {low: 0, medium: 1, high: 2};

function metadataForVuln(vuln) {
 return {
   id: vuln.id,
   title: vuln.title,
   name: vuln.name,
   info: vuln.info,
   severity: vuln.severity,
   severityValue: severityMap[vuln.severity],
 };
}

function groupVulns(vulns) {
 return vulns.reduce(function (map, curr) {
   if (!map[curr.id]) {
     map[curr.id] = {};
     map[curr.id].list = [];
     map[curr.id].metadata = metadataForVuln(curr);

   }
   map[curr.id].list.push(curr);
   return map;
 }, {});
}

fs.readFile('output.json', 'utf8', (err, data) => {
 if (err) throw err;
 data = JSON.parse(data);
 data.vulnerabilities = groupVulns(data.vulnerabilities);
 // console.log(JSON.stringify(data));
 const result = hbTemplate(JSON.parse(data));
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

Handlebars.registerHelper('if_any', function () { // important: not an arrow fn
  const args = [].slice.call(arguments);
  const opts = args.pop();

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

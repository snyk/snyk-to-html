var test = require('tap-only');
var snykToHtml = require('../lib/snyk-to-html.js');

test('all-around test', function (t) {
  t.plan(3);
  snykToHtml.run(
    __dirname + '/fixtures/test-report.json',
    __dirname + '/../template/test-report.hbs',
    function (report) {
      t.contains(report, '<h2 class="card__title">Regular Expression Denial of Service (ReDoS)<\/h2>');
      t.contains(report, '<h2 class="card__title">Cross-site Scripting (XSS)</h2>');
      t.contains(report, '<h2 class="card__title">Regular Expression Denial of Service (DoS)</h2>');
    });
});

import {test} from 'tap';
import { SnykToHtml } from '../src/lib/snyk-to-html';
import path = require('path');

test('all-around test', function (t) {
  t.plan(3);
  SnykToHtml.run(
    path.join(__dirname, 'fixtures', 'test-report.json'),
    path.join(__dirname, '..', 'template', 'test-report.hbs'),
    function (report) {
      t.contains(report, '<h2 class="card__title">Regular Expression Denial of Service (ReDoS)<\/h2>');
      t.contains(report, '<h2 class="card__title">Cross-site Scripting (XSS)</h2>');
      t.contains(report, '<h2 class="card__title">Regular Expression Denial of Service (DoS)</h2>');
    });
});

test('multi-report test', function (t) {
  t.plan(5);
  SnykToHtml.run(
    path.join(__dirname, 'fixtures', 'multi-test-report.json'),
    path.join(__dirname, '..', 'template', 'test-report.hbs'),
    function (report) {
      t.contains(report, '<div class="meta-count"><span>139 vulnerable dependency paths</span></div>');
      t.contains(report, '<h2 class="card__title">Access Restriction Bypass</h2>');
      t.contains(report, '<h2 class="card__title">Regular Expression Denial of Service (ReDoS)<\/h2>');
      t.contains(report, '<h2 class="card__title">Cross-site Scripting (XSS)</h2>');
      t.contains(report, '<h2 class="card__title">Regular Expression Denial of Service (DoS)</h2>');
    });
});

test('empty values test (description and info)', function (t) {
  t.plan(1);
  SnykToHtml.run(
    path.join(__dirname, 'fixtures', 'test-report-empty-descr.json'),
    path.join(__dirname, '..', 'template', 'test-report.hbs'),
    function (report) {
      t.contains(report, '<p>No description available.</p>');
    });
});

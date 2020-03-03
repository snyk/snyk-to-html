import path = require('path');
import {test} from 'tap';
import { SnykToHtml } from '../src/lib/snyk-to-html';

const summaryOnly = true;
const noSummary = false;

test('all-around test', (t) => {
  t.plan(5);
  SnykToHtml.run(
    path.join(__dirname, 'fixtures', 'test-report.json'),
    path.join(__dirname, '..', 'template', 'test-report.hbs'),
      noSummary,
     (report) => {
      t.contains(report, '<h2 class="card__title">Regular Expression Denial of Service (ReDoS)<\/h2>', 'should contain Regular Expression Denial of Service (ReDoS) vulnerability');
      t.contains(report, '<h2 class="card__title">Cross-site Scripting (XSS)</h2>', 'should contain Cross-site Scripting (XSS) vulnerability');
      t.contains(report, '<h2 class="card__title">Regular Expression Denial of Service (DoS)</h2>', 'should contain Regular Expression Denial of Service (DoS) vulnerability');
      t.contains(report, '<h2 id="overview">Overview</h2>', 'should contain overview of the vulnerability');
      t.contains(report, '<h2 id="details">Details</h2>', 'should contain description of the vulnerability');
    });
});

test('multi-report test', (t) => {
  t.plan(7);
  SnykToHtml.run(
    path.join(__dirname, 'fixtures', 'multi-test-report.json'),
    path.join(__dirname, '..', 'template', 'test-report.hbs'),
      noSummary,
     (report) => {
      t.contains(report, '<div class="meta-count"><span>139 vulnerable dependency paths</span></div>', 'should contain number of vulnerable dependency paths');
      t.contains(report, '<h2 class="card__title">Access Restriction Bypass</h2>', 'should contain Access Restriction Bypass vulnerability');
      t.contains(report, '<h2 class="card__title">Regular Expression Denial of Service (ReDoS)<\/h2>', 'should contain Regular Expression Denial of Service (ReDoS) vulnerability');
      t.contains(report, '<h2 class="card__title">Cross-site Scripting (XSS)</h2>', 'should contain Cross-site Scripting (XSS) vulnerability');
      t.contains(report, '<h2 class="card__title">Regular Expression Denial of Service (DoS)</h2>', 'should contain Regular Expression Denial of Service (DoS) vulnerability');
      t.contains(report, '<h2 id="overview">Overview</h2>', 'should contain overview of the vulnerability');
      t.contains(report, '<h2 id="details">Details</h2>', 'should contain description of the vulnerability');
    });
});

test('multi-report test with summary only', (t) => {
  t.plan(7);
  SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'multi-test-report.json'),
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      summaryOnly,
      (report) => {
        t.contains(report, '<div class="meta-count"><span>139 vulnerable dependency paths</span></div>', 'should contain number of vulnerable dependency paths');
        t.contains(report, '<h2 class="card__title">Access Restriction Bypass</h2>', 'should contain Access Restriction Bypass vulnerability');
        t.contains(report, '<h2 class="card__title">Regular Expression Denial of Service (ReDoS)<\/h2>', 'should contain Regular Expression Denial of Service (ReDoS) vulnerability');
        t.contains(report, '<h2 class="card__title">Cross-site Scripting (XSS)</h2>', 'should contain Cross-site Scripting (XSS) vulnerability');
        t.contains(report, '<h2 class="card__title">Regular Expression Denial of Service (DoS)</h2>', 'should contain Regular Expression Denial of Service (DoS) vulnerability');
        t.doesNotHave(report, '<h2 id="overview">Overview</h2>', 'does not contain overview of the vulnerability');
        t.doesNotHave(report, '<h2 id="details">Details</h2>', 'does not contain details of the vulnerability');
      });
});

test('all-around test with summary only', (t) => {
  t.plan(5);
  SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'test-report.json'),
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      summaryOnly,
      (report) => {
        t.contains(report, '<h2 class="card__title">Regular Expression Denial of Service (ReDoS)<\/h2>', 'should contain Regular Expression Denial of Service (ReDoS) vulnerability');
        t.contains(report, '<h2 class="card__title">Cross-site Scripting (XSS)</h2>', 'should contain Cross-site Scripting (XSS) vulnerability');
        t.contains(report, '<h2 class="card__title">Regular Expression Denial of Service (DoS)</h2>', 'should contain Regular Expression Denial of Service (DoS) vulnerability');
        t.doesNotHave(report, '<h2 id="overview">Overview</h2>', 'does not contain overview of the vulnerability');
        t.doesNotHave(report, '<h2 id="details">Details</h2>', 'does not contain details of the vulnerability');
      });
});

test('all-around test with summary only with no remediation but having one fixedIn', (t) => {
  t.plan(4);
  SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'test-report-with-no-remediation-with-one-fixed-in.json'),
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      summaryOnly,
      (report) => {
        t.contains(report, '<h2 class="card__title">Regular Expression Denial of Service (ReDoS)<\/h2>', 'should contain Regular Expression Denial of Service (ReDoS) vulnerability');
        t.contains(report, 'Fixed in: 2.9.10', 'should say: Fixed in: 2.9.10');
        t.doesNotHave(report, '<h2 id="overview">Overview</h2>', 'does not contain overview of the vulnerability');
        t.doesNotHave(report, '<h2 id="details">Details</h2>', 'does not contain details of the vulnerability');
      });
});

test('all-around test with summary only with no remediation but having multiple fixedIn', (t) => {
  t.plan(4);
  SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'test-report-with-no-remediation-with-multiple-fixed-in.json'),
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      summaryOnly,
      (report) => {
        t.contains(report, '<h2 class="card__title">Regular Expression Denial of Service (ReDoS)<\/h2>', 'should contain Regular Expression Denial of Service (ReDoS) vulnerability');
        t.contains(report, 'Fixed in: 2.9.10, 4.5.6', 'should say: Fixed in: 2.9.10, 4.5.6');
        t.doesNotHave(report, '<h2 id="overview">Overview</h2>', 'does not contain overview of the vulnerability');
        t.doesNotHave(report, '<h2 id="details">Details</h2>', 'does not contain details of the vulnerability');
      });
});

test('all-around test with summary only with no remediation and no fixedIns', (t) => {
  t.plan(4);
  SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'test-report-with-no-remediation-and-no-fixed-in.json'),
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      summaryOnly,
      (report) => {
        t.contains(report, '<h2 class="card__title">Regular Expression Denial of Service (ReDoS)<\/h2>', 'should contain Regular Expression Denial of Service (ReDoS) vulnerability');
        t.contains(report, 'There is no remediation at the moment', 'should say There is no remediation at the moment');
        t.doesNotHave(report, '<h2 id="overview">Overview</h2>', 'does not contain overview of the vulnerability');
        t.doesNotHave(report, '<h2 id="details">Details</h2>', 'does not contain details of the vulnerability');
      });
});

test('empty values test (description and info)', (t) => {
  t.plan(1);
  SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'test-report-empty-descr.json'),
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      noSummary,
      (report) => {
        t.contains(report, '<p>No description available.</p>', 'should contain "No description available"');
      });
});

test('should not generate report for invalid json', (t) => {
  t.plan(0);
  SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'invalid-input.json'),
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      noSummary,
      (report) => {
        t.match(report, '', 'report object is empty');
      });
});

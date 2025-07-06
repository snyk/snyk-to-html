import { describe, expect, it } from '@jest/globals';

import * as path from 'node:path';
import { SnykToHtml } from '../src/lib/snyk-to-html';

const WITH_SUMMARY = true;
const WITHOUT_SUMMARY = false;
const WITH_REMEDIATION = true;
const WITHOUT_REMEDIATION = false;

describe('test running SnykToHtml.run', () => {
  it('creates a valid report', (done) => {
    SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'test-report.json'),
      WITHOUT_REMEDIATION,
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      WITHOUT_SUMMARY,
      (report) => {
        try {
          expect(report).toContain(
            '<h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>',
          );
          expect(report).toContain(
            '<h2 class="card__title">Cross-site Scripting (XSS)</h2>',
          );
          expect(report).toContain(
            '<h2 class="card__title">Regular Expression Denial of Service (DoS)</h2>',
          );
          expect(report).toContain('<h2 id="overview">Overview</h2>');
          expect(report).toContain('<h2 id="details">Details</h2>');
          expect(report).not.toContain('<div class="suppression-card">');
          done();
        } catch (error: any) {
          done(error);
        }
      },
    );
  });

  it('creates a multi-report', (done) => {
    SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'multi-test-report.json'),
      WITHOUT_REMEDIATION,
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      WITHOUT_SUMMARY,
      (report) => {
        try {
          expect(report).toContain(
            '<div class="meta-count"><span>139 vulnerable dependency paths</span></div>',
          );
          expect(report).toContain(
            '<h2 class="card__title">Access Restriction Bypass</h2>',
          );
          expect(report).toContain(
            '<h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>',
          );
          expect(report).toContain(
            '<h2 class="card__title">Cross-site Scripting (XSS)</h2>',
          );
          expect(report).toContain(
            '<h2 class="card__title">Regular Expression Denial of Service (DoS)</h2>',
          );
          expect(report).toContain('<h2 id="overview">Overview</h2>');
          expect(report).toContain('<h2 id="details">Details</h2>');
          done();
        } catch (error: any) {
          done(error);
        }
      },
    );
  });

  it('creates a multi-report test with summary only', (done) => {
    SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'multi-test-report.json'),
      WITHOUT_REMEDIATION,
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      WITH_SUMMARY,
      (report) => {
        try {
          expect(report).toContain(
            '<div class="meta-count"><span>139 vulnerable dependency paths</span></div>',
          );
          expect(report).toContain(
            '<h2 class="card__title">Access Restriction Bypass</h2>',
          );
          expect(report).toContain(
            '<h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>',
          );
          expect(report).toContain(
            '<h2 class="card__title">Cross-site Scripting (XSS)</h2>',
          );
          expect(report).toContain(
            '<h2 class="card__title">Regular Expression Denial of Service (DoS)</h2>',
          );
          expect(report).not.toContain('<h2>Overview</h2>');
          expect(report).not.toContain('<h2>Details</h2>');
          done();
        } catch (error: any) {
          done(error);
        }
      },
    );
  });

  it('creates a report when called with remediations arg and data containing remediations and vulnerabilities object', (done) => {
    SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'test-report-with-remediation.json'),
      WITH_REMEDIATION,
      path.join(__dirname, '..', 'template', 'remediation-report.hbs'),
      WITH_SUMMARY,
      (report) => {
        try {
          // can see actionable remediation
          expect(report).toContain(
            '<body class="test-remediation-section-projects">',
          );
          expect(report).toContain('.remediation-card');
          expect(report).toContain('.remediation-card__layout-container');
          expect(report).toContain('.remediation-card__pane');

          // can see the vulnerabilities
          expect(report).toContain('cards--vuln');
          // can see at least one vulnerability
          expect(report).toContain('card--vuln');
          // check for a specific vulnerability
          expect(report).toContain('class="card__title">Prototype Pollution');
          done();
        } catch (error: any) {
          done(error);
        }
      },
    );
  });

  it('creates a report when called with remediation arg, some remediations and some vulns does not display vulns', (done) => {
    SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'test-report-with-remediation.json'),
      WITH_REMEDIATION,
      path.join(__dirname, '..', 'template', 'remediation-report.hbs'),
      WITH_SUMMARY,
      (report) => {
        try {
          // no actionable remediations displayed
          expect(report).toContain('remediation-card');
          expect(report).toContain('remediation-card__block');
          expect(report).not.toMatch('class="card card--vuln"');
          expect(report).not.toMatch(
            '<h2>No known vulnerabilities detected.</h2>',
          );
          done();
        } catch (error: any) {
          done(error);
        }
      },
    );
  });

  it('creates a report when called with remediation arg, no remediations and some vulns displays vulns', (done) => {
    SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'multi-test-report.json'),
      WITH_REMEDIATION,
      path.join(__dirname, '..', 'template', 'remediation-report.hbs'),
      WITH_SUMMARY,
      (report) => {
        try {
          // no actionable remediations displayed
          expect(report).not.toMatch('<div class="remediation-card">');
          expect(report).toContain('.card--vuln');
          done();
        } catch (error: any) {
          done(error);
        }
      },
    );
  });

  it('creates a report when called with remediation arg, no remediations or vulns displays "no vulns" message', (done) => {
    SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'no-vulns.json'),
      WITH_REMEDIATION,
      path.join(__dirname, '..', 'template', 'remediation-report.hbs'),
      WITH_SUMMARY,
      (report) => {
        try {
          // no actionable remediations displayed
          expect(report).not.toMatch('<div class="remediation-card">');
          expect(report).not.toMatch('.div class="card card--vuln"');
          expect(report).toContain('No known vulnerabilities detected');
          done();
        } catch (error: any) {
          done(error);
        }
      },
    );
  });

  it('creates a report with summary only', (done) => {
    SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'test-report.json'),
      WITHOUT_REMEDIATION,
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      WITH_SUMMARY,
      (report) => {
        try {
          expect(report).toContain(
            '<h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>',
          );
          expect(report).toContain(
            '<h2 class="card__title">Cross-site Scripting (XSS)</h2>',
          );
          expect(report).toContain(
            '<h2 class="card__title">Regular Expression Denial of Service (DoS)</h2>',
          );
          expect(report).not.toContain('<h2>Overview</h2>');
          expect(report).not.toContain('<h2>Details</h2>');
          done();
        } catch (error: any) {
          done(error);
        }
      },
    );
  });

  it('creates a report with summary only with no remediation but having one fixedIn', (done) => {
    SnykToHtml.run(
      path.join(
        __dirname,
        'fixtures',
        'test-report-with-no-remediation-with-one-fixed-in.json',
      ),
      WITHOUT_REMEDIATION,
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      WITH_SUMMARY,
      (report) => {
        try {
          expect(report).toContain(
            '<h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>',
          );
          expect(report).toContain('Fixed in: 2.9.10');
          expect(report).not.toContain('<h2>Overview</h2>');
          expect(report).not.toContain('<h2>Details</h2>');
          done();
        } catch (error: any) {
          done(error);
        }
      },
    );
  });

  it('creates a report with summary only with no remediation but having multiple fixedIn', (done) => {
    SnykToHtml.run(
      path.join(
        __dirname,
        'fixtures',
        'test-report-with-no-remediation-with-multiple-fixed-in.json',
      ),
      WITHOUT_REMEDIATION,
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      WITH_SUMMARY,
      (report) => {
        try {
          expect(report).toContain(
            '<h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>',
          );
          expect(report).toContain('Fixed in: 2.9.10, 4.5.6');
          expect(report).not.toContain('<h2>Overview</h2>');
          expect(report).not.toContain('<h2>Details</h2>');
          done();
        } catch (error: any) {
          done(error);
        }
      },
    );
  });

  it('creates a report with summary only with no remediation and no fixedIns', (done) => {
    SnykToHtml.run(
      path.join(
        __dirname,
        'fixtures',
        'test-report-with-no-remediation-and-no-fixed-in.json',
      ),
      WITHOUT_REMEDIATION,
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      WITH_SUMMARY,
      (report) => {
        try {
          expect(report).toContain(
            '<h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>',
          );
          expect(report).toContain('There is no remediation at the moment');
          expect(report).not.toContain('<h2>Overview</h2>');
          expect(report).not.toContain('<h2>Details</h2>');
          done();
        } catch (error: any) {
          done(error);
        }
      },
    );
  });

  it('handles empty values (description and info)', (done) => {
    SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'test-report-empty-descr.json'),
      WITHOUT_REMEDIATION,
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      WITHOUT_SUMMARY,
      (report) => {
        try {
          expect(report).toContain('<p>No description available.</p>');
          done();
        } catch (error: any) {
          done(error);
        }
      },
    );
  });

  it('creates a valid report with suppressed vulnerabilities with code test', (done) => {
    SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'test-code-consistent-ignores.json'),
      WITHOUT_REMEDIATION,
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      WITHOUT_SUMMARY,
      (report) => {
        try {
          expect(report).toContain('<div class="suppression-card">');
          done();
        } catch (error: any) {
          done(error);
        }
      },
    );
  });

  it('does not generate a report for invalid json', async () => {
    await expect(
      SnykToHtml.runAsync(
        path.join(__dirname, 'fixtures', 'invalid-input.json'),
        WITHOUT_REMEDIATION,
        path.join(__dirname, '..', 'template', 'test-report.hbs'),
        WITHOUT_SUMMARY,
      ),
    ).rejects.toThrow('The source provided is not a valid json!');
  });

  it('displays vulns in descending order of severity ', (done) => {
    SnykToHtml.run(
      path.join(
        __dirname,
        'fixtures',
        'test-report-with-critical-severity-vuln.json',
      ),
      WITHOUT_REMEDIATION,
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      WITH_SUMMARY,
      (report) => {
        try {
          const cleanedReport = report.replace(
            /<p class="timestamp">.*<\/p>/g,
            '<p class="timestamp">TIMESTAMP</p>',
          );

          // Asserting presence using CSS classname :grimace:
          // check each severity combination
          const orderScenarios = [
            cleanedReport.indexOf(`data-snyk-test="critical"`) <
              cleanedReport.indexOf(`data-snyk-test="high"`),
            cleanedReport.indexOf(`data-snyk-test="high"`) <
              cleanedReport.indexOf(`data-snyk-test="medium"`),
            cleanedReport.indexOf(`data-snyk-test="medium"`) <
              cleanedReport.indexOf(`data-snyk-test="low"`),
          ];

          orderScenarios.forEach((orderAsExpected) => {
            expect(orderAsExpected).toBe(true);
          });

          expect(cleanedReport).toMatchSnapshot();
          done();
        } catch (error: any) {
          done(error);
        }
      },
    );
  });

  it('generates a report with no vulnerabilities and no remediation', (done) => {
    SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'no-vulns.json'),
      WITHOUT_REMEDIATION,
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      WITHOUT_SUMMARY,
      (report) => {
        try {
          expect(report).toContain('No known vulnerabilities detected.');
          done();
        } catch (error: any) {
          done(error);
        }
      },
    );
  });

  it('generates a report with no vulnerabilities but with remediation', (done) => {
    SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'no-vulns.json'),
      WITH_REMEDIATION,
      path.join(__dirname, '..', 'template', 'remediation-report.hbs'),
      WITHOUT_SUMMARY,
      (report) => {
        try {
          expect(report).toContain('No known vulnerabilities detected.');
          done();
        } catch (error: any) {
          done(error);
        }
      },
    );
  });

  it('displays a metatable when metatable data is present', (done) => {
    SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'test-report-with-remediation.json'),
      WITHOUT_REMEDIATION,
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      WITHOUT_SUMMARY,
      (report) => {
        try {
          expect(report).toContain('<table class="metatable">');
          done();
        } catch (error: any) {
          done(error);
        }
      },
    );
  });

  it('does not display metatable when no metatable data is present', (done) => {
    SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'test-report.json'),
      WITHOUT_REMEDIATION,
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      WITHOUT_SUMMARY,
      (report) => {
        try {
          expect(report).not.toContain('<table class="metatable">');
          done();
        } catch (error: any) {
          done(error);
        }
      },
    );
  });

  it('does not display license issues on a cve report summary', (done) => {
    SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'multi-test-report.json'),
      WITHOUT_REMEDIATION,
      path.join(__dirname, '..', 'template', 'test-cve-report.hbs'),
      WITHOUT_SUMMARY,
      (report) => {
        try {
          expect(report).not.toContain(
            '<div class="divTableCell"><a href="https://snyk.io/vuln/snyk:lic',
          );
          done();
        } catch (error: any) {
          done(error);
        }
      },
    );
  });

  it('generates a report when called with IaC input', (done) => {
    SnykToHtml.run(
      path.join(__dirname, 'fixtures/iac-test-report.json'),
      WITHOUT_REMEDIATION,
      path.join(__dirname, '../template/iac/test-report.hbs'),
      WITHOUT_SUMMARY,
      (report) => {
        try {
          expect(report).toContain(
            '<h2 class="card__title">App Service allows FTP deployments</h2>',
          );
          expect(report).toContain('<h2>Impact</h2>');
          expect(report).toContain(
            '<a href="https://security.snyk.io/rules/cloud//SNYK-CC-AZURE-533">More about this issue</a>',
          );
          expect(report).toContain(
            '<a href="https://security.snyk.io/rules/cloud//SNYK-CC-AZURE-533">SNYK-CC-AZURE-533</a>',
          );
          expect(report).toContain('Line number: 109');
          done();
        } catch (error: any) {
          done(error);
        }
      },
    );
  });

  it('generates a report with container app vulnerabilities', (done) => {
    // report generated with "snyk container test --app-vulns --json" against an image that is using an old debian-based
    // python image and the golang.org/x/crypto/ssh package at a version with a known vulnerability.
    // A lot of vulns have been removed by hand to decrease file-size of the fixture.
    SnykToHtml.run(
      path.join(
        __dirname,
        'fixtures',
        'test-report-container-with-app-vulns.json',
      ),
      WITHOUT_REMEDIATION,
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      WITHOUT_SUMMARY,
      (report) => {
        try {
          expect(report).toContain(
            '<li class="paths">vulnerable:latest (deb)</li>',
          );
          expect(report).toContain(
            '<li class="paths">vulnerable:latest (gomodules)</li>',
          );
          expect(report).toContain(
            '<a href="https://snyk.io/vuln/SNYK-DEBIAN10-ZLIB-2976149">More about this vulnerability</a>',
          );
          expect(report).toContain(
            '<a href="https://snyk.io/vuln/SNYK-GOLANG-GOLANGORGXCRYPTOSSH-551923">More about this vulnerability</a>',
          );
          done();
        } catch (error: any) {
          done(error);
        }
      },
    );
  });

  it('generates a report when called with custom path descriptors', (done) => {
    // report generated with "snyk container test --all-projects --json" on a nuget multi-project with more than one path
    SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'test-report-nuget-multi-project.json'),
      WITHOUT_REMEDIATION,
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      WITHOUT_SUMMARY,
      (report) => {
        try {
          expect(report).toContain(
            '<li class="paths">/root/nugetMultiProjectRepo/DotNetMultiProject/SomeProject.RandomProject.API/obj/project.assets.json (nuget)</li>',
          );
          done();
        } catch (error: any) {
          done(error);
        }
      },
    );
  });

  it('creates a report with risk scores displayed correctly', (done) => {
    SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'test-report-with-risk-scores.json'),
      WITHOUT_REMEDIATION,
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      WITHOUT_SUMMARY,
      (report) => {
        try {
          // Vulnerability with high riskScore (975)
          expect(report).toContain('brace-expansion-very-high-risk');
          expect(report).toContain(
            '<div class="risk-score-display__label">RISK SCORE</div>',
          );
          expect(report).toContain(
            '<div class="risk-score-display__value">975</div>',
          );

          // Vulnerability with riskScore 0
          expect(report).toContain('brace-expansion-zero-risk');
          expect(report).toContain(
            '<div class="risk-score-display__label">RISK SCORE</div>',
          );
          expect(report).toContain(
            '<div class="risk-score-display__value">0</div>',
          );

          // Vulnerability with medium riskScore (50)
          expect(report).toContain('ejs-medium-risk');
          expect(report).toContain(
            '<div class="risk-score-display__label">RISK SCORE</div>',
          );
          expect(report).toContain(
            '<div class="risk-score-display__value">50</div>',
          );

          // Vulnerability with invalid riskScore ("Not Applicable") - should not display risk score
          expect(report).toContain('brace-expansion-invalid-risk');
          const invalidRiskVulnCard = report.substring(
            report.indexOf('brace-expansion-invalid-risk'),
          );
          const nextCardStart = invalidRiskVulnCard.indexOf(
            '<div class="card card--vuln',
            1,
          );
          const invalidRiskCardContent =
            nextCardStart > -1
              ? invalidRiskVulnCard.substring(0, nextCardStart)
              : invalidRiskVulnCard;
          expect(invalidRiskCardContent).not.toContain(
            '<div class="risk-score-display__label">RISK SCORE</div>',
          );

          // Vulnerability with no riskScore property - should not display risk score
          expect(report).toContain('brace-expansion-no-risk');
          const noRiskVulnCard = report.substring(
            report.indexOf('brace-expansion-no-risk'),
          );
          const nextCardStartNoRisk = noRiskVulnCard.indexOf(
            '<div class="card card--vuln',
            1,
          );
          const noRiskCardContent =
            nextCardStartNoRisk > -1
              ? noRiskVulnCard.substring(0, nextCardStartNoRisk)
              : noRiskVulnCard;
          expect(noRiskCardContent).not.toContain(
            '<div class="risk-score-display__label">RISK SCORE</div>',
          );

          done();
        } catch (error: any) {
          done(error);
        }
      },
    );
  });
});

import { describe, expect, it } from '@jest/globals';

import * as path from 'node:path';
import { SnykToHtml } from '../src/lib/snyk-to-html';

describe('test running SnykToHtml.run', () => {
  it('creates a valid report', async () => {
    SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'test-report.json'),
      false,
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      false,
      (report) => {
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
      },
    );
  });

  it('creates a multi-report', async () => {
    SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'multi-test-report.json'),
      false,
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      false,
      (report) => {
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
      },
    );
  });

  it('creates a multi-report test with summary only', () => {
    SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'multi-test-report.json'),
      false,
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      true,
      (report) => {
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
        expect(report).not.toContain('<h2 id="overview">Overview</h2>');
        expect(report).not.toContain('<h2 id="details">Details</h2>');
      },
    );
  });

  it('creates a report when called with remediations arg and data containing remediations object', () => {
    SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'test-report-with-remediation.json'),
      true,
      path.join(__dirname, '..', 'template', 'remediation-report.hbs'),
      true,
      (report) => {
        // can see actionable remediation
        expect(report).toContain(
          '<body class="test-remediation-section-projects">',
        );
        expect(report).toContain('.remediation-card');
        expect(report).toContain('.remediation-card__layout-container');
        expect(report).toContain('.remediation-card__pane');
      },
    );
  });

  it('creates a report when called with remediation arg, some remediations and some vulns does not display vulns', () => {
    SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'test-report-with-remediation.json'),
      true,
      path.join(__dirname, '..', 'template', 'remediation-report.hbs'),
      true,
      (report) => {
        // no actionable remediations displayed
        expect(report).toContain('remediation-card');
        expect(report).toContain('remediation-card__block');
        expect(report).not.toMatch('class="card card--vuln"');
        expect(report).not.toMatch(
          '<h2>No known vulnerabilities detected.</h2>',
        );
      },
    );
  });

  it('creates a report when called with remediation arg, no remediations and some vulns displays vulns', () => {
    SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'multi-test-report.json'),
      true,
      path.join(__dirname, '..', 'template', 'remediation-report.hbs'),
      true,
      (report) => {
        // no actionable remediations displayed
        expect(report).not.toMatch('<div class="remediation-card">');
        expect(report).toContain('.card--vuln');
      },
    );
  });

  it('creates a report when called with remediation arg, no remediations or vulns displays "no vulns" message', () => {
    SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'no-vulns.json'),
      true,
      path.join(__dirname, '..', 'template', 'remediation-report.hbs'),
      true,
      (report) => {
        // no actionable remediations displayed
        expect(report).not.toMatch('<div class="remediation-card">');
        expect(report).not.toMatch('.div class="card card--vuln"');
        expect(report).toContain('No known vulnerabilities detected');
      },
    );
  });

  it('creates a report with summary only', () => {
    SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'test-report.json'),
      false,
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      true,
      (report) => {
        expect(report).toContain(
          '<h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>',
        );
        expect(report).toContain(
          '<h2 class="card__title">Cross-site Scripting (XSS)</h2>',
        );
        expect(report).toContain(
          '<h2 class="card__title">Regular Expression Denial of Service (DoS)</h2>',
        );
        expect(report).not.toContain('<h2 id="overview">Overview</h2>');
        expect(report).not.toContain('<h2 id="details">Details</h2>');
      },
    );
  });

  it('creates a report with summary only with no remediation but having one fixedIn', () => {
    SnykToHtml.run(
      path.join(
        __dirname,
        'fixtures',
        'test-report-with-no-remediation-with-one-fixed-in.json',
      ),
      false,
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      true,
      (report) => {
        expect(report).toContain(
          '<h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>',
        );
        expect(report).toContain('Fixed in: 2.9.10');
        expect(report).not.toContain('<h2 id="overview">Overview</h2>');
        expect(report).not.toContain('<h2 id="details">Details</h2>');
      },
    );
  });

  it('creates a report with summary only with no remediation but having multiple fixedIn', () => {
    SnykToHtml.run(
      path.join(
        __dirname,
        'fixtures',
        'test-report-with-no-remediation-with-multiple-fixed-in.json',
      ),
      false,
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      true,
      (report) => {
        expect(report).toContain(
          '<h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>',
        );
        expect(report).toContain('Fixed in: 2.9.10, 4.5.6');
        expect(report).not.toContain('<h2 id="overview">Overview</h2>');
        expect(report).not.toContain('<h2 id="details">Details</h2>');
      },
    );
  });

  it('creates a report with summary only with no remediation and no fixedIns', () => {
    SnykToHtml.run(
      path.join(
        __dirname,
        'fixtures',
        'test-report-with-no-remediation-and-no-fixed-in.json',
      ),
      false,
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      true,
      (report) => {
        expect(report).toContain(
          '<h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>',
        );
        expect(report).toContain('There is no remediation at the moment');
        expect(report).not.toContain('<h2 id="overview">Overview</h2>');
        expect(report).not.toContain('<h2 id="details">Details</h2>');
      },
    );
  });

  it('handles empty values (description and info)', () => {
    SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'test-report-empty-descr.json'),
      false,
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      false,
      (report) => {
        expect(report).toContain('<p>No description available.</p>');
      },
    );
  });

  it('does not generate a report for invalid json', async () => {
    await expect(
      SnykToHtml.runAsync(
        path.join(__dirname, 'fixtures', 'invalid-input.json'),
        false,
        path.join(__dirname, '..', 'template', 'test-report.hbs'),
        false,
      ),
    ).rejects.toThrowError('The source provided is not a valid json!');
  });

  it('displays vulns in descending order of severity ', () => {
    SnykToHtml.run(
      path.join(
        __dirname,
        'fixtures',
        'test-report-with-critical-severity-vuln.json',
      ),
      false,
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      true,
      (report) => {
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
      },
    );
  });

  it('generates a report with no vulnerabilities and no remediation', () => {
    SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'no-vulns.json'),
      false,
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      false,
      (report) => {
        expect(report).toContain('No known vulnerabilities detected.');
      },
    );
  });

  it('generates a report with no vulnerabilities but with remediation', () => {
    SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'no-vulns.json'),
      true,
      path.join(__dirname, '..', 'template', 'remediation-report.hbs'),
      false,
      (report) => {
        expect(report).toContain('No known vulnerabilities detected.');
      },
    );
  });

  it('displays a metatable when metatable data is present', () => {
    SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'test-report-with-remediation.json'),
      false,
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      false,
      (report) => {
        expect(report).toContain('<table class="metatable">');
      },
    );
  });

  it('does not display metatable when no metatable data is present', () => {
    SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'test-report.json'),
      false,
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      false,
      (report) => {
        expect(report).not.toContain('<table class="metatable">');
      },
    );
  });

  it('does not display license issues on a cve report summary', () => {
    SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'multi-test-report.json'),
      false,
      path.join(__dirname, '..', 'template', 'test-cve-report.hbs'),
      false,
      (report) => {
        expect(report).not.toContain(
          '<div class="divTableCell"><a href="https://snyk.io/vuln/snyk:lic',
        );
      },
    );
  });

  it('generates a report when called with IaC input', () => {
    SnykToHtml.run(
      path.join(__dirname, 'fixtures/iac-test-report.json'),
      false,
      path.join(__dirname, '../template/iac/test-report.hbs'),
      false,
      (report) => {
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
      },
    );
  });

  it('generates a report with container app vulnerabilities', () => {
    // report generated with "snyk container test --app-vulns --json" against an image that is using an old debian-based
    // python image and the golang.org/x/crypto/ssh package at a version with a known vulnerability.
    // A lot of vulns have been removed by hand to decrease file-size of the fixture.
    SnykToHtml.run(
      path.join(
        __dirname,
        'fixtures',
        'test-report-container-with-app-vulns.json',
      ),
      false,
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      false,
      (report) => {
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
      },
    );
  });

  it('generates a report when called with custom path descriptors', () => {
    // report generated with "snyk container test --all-projects --json" on a nuget multi-project with more than one path
    SnykToHtml.run(
      path.join(__dirname, 'fixtures', 'test-report-nuget-multi-project.json'),
      false,
      path.join(__dirname, '..', 'template', 'test-report.hbs'),
      false,
      (report) => {
        expect(report).toContain(
          '<li class="paths">/root/nugetMultiProjectRepo/DotNetMultiProject/SomeProject.RandomProject.API/obj/project.assets.json (nuget)</li>',
        );
      },
    );
  });
});

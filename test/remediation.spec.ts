import { describe, expect, it } from '@jest/globals';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { SnykToHtml } from '../src/lib/snyk-to-html';
import { normalizeRemediationChanges } from '../src/lib/vuln';

const remediationTemplate = path.join(
  __dirname,
  '..',
  'template',
  'remediation-report.hbs',
);

function writeTempReport(report: object): string {
  const filePath = path.join(
    os.tmpdir(),
    `snyk-to-html-remediation-${Date.now()}-${Math.random()}.json`,
  );
  fs.writeFileSync(filePath, JSON.stringify(report));
  return filePath;
}

describe('normalizeRemediationChanges', () => {
  it('returns undefined when remediation is absent', () => {
    expect(normalizeRemediationChanges(undefined)).toBeUndefined();
  });

  it('adds empty defaults for missing sub-fields', () => {
    const remediation = {
      upgrade: { 'lodash@4.17.15': { upgradeTo: 'lodash@4.17.21' } },
      pin: {},
      unresolved: [],
      ignore: {},
    };

    expect(normalizeRemediationChanges(remediation)).toEqual({
      upgrade: remediation.upgrade,
      pin: {},
      patch: {},
      ignore: {},
      unresolved: [],
    });
  });

  it('leaves complete remediation objects unchanged', () => {
    const remediation = {
      upgrade: {},
      pin: {},
      patch: { 'SNYK-123': { paths: [] } },
      ignore: { 'SNYK-123': [] },
      unresolved: [{ id: 'SNYK-123' }],
    };

    expect(normalizeRemediationChanges(remediation)).toEqual(remediation);
  });
});

describe('SnykToHtml remediation normalization', () => {
  it('generates actionable remediation when patch is omitted', (done) => {
    SnykToHtml.run(
      path.join(
        __dirname,
        'fixtures',
        'test-report-remediation-missing-patch.json',
      ),
      true,
      remediationTemplate,
      false,
      (report) => {
        try {
          expect(report).toContain('remediation-card');
          done();
        } catch (error: any) {
          done(error);
        }
      },
    );
  });

  it('generates actionable remediation for CLI-shaped JSON missing patch', (done) => {
    const reportPath = writeTempReport({
      ok: false,
      vulnerabilities: [],
      remediation: {
        upgrade: {},
        pin: {},
        unresolved: [],
        ignore: {},
      },
    });

    SnykToHtml.run(reportPath, true, remediationTemplate, false, (report) => {
      try {
        expect(report).toContain('remediation-card');
        done();
      } catch (error: any) {
        done(error);
      } finally {
        fs.unlinkSync(reportPath);
      }
    });
  });
});

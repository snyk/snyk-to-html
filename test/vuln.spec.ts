import { describe, expect, it } from '@jest/globals';
import * as fs from 'fs';
import * as path from 'path';
import {
  addIssueDataToPatch,
  getSeverityScore,
  getUpgrades,
} from '../src/lib/vuln';

const admZipVulnPath = path.join(__dirname, 'fixtures', 'adm-zip.vuln.json');
const patchableVulnPath = path.join(
  __dirname,
  'fixtures',
  'lodash.patched.vuln.json',
);

describe('getUpgrades', () => {
  it('with empty data', () => {
    expect(getUpgrades({}, {})).toEqual([]);
  });

  it('with data', () => {
    const upgrade = {
      'adm-zip@0.4.7': {
        upgradeTo: 'adm-zip@0.4.11',
        upgrades: ['adm-zip@0.4.7'],
        vulns: ['npm:adm-zip:20180415'],
      },
    };
    const vulnerabilities = [
      JSON.parse(fs.readFileSync(admZipVulnPath, 'utf-8')),
    ];
    const expected = [
      {
        severityScore: 3,
        upgradeTo: 'adm-zip@0.4.11',
        upgradeFrom: 'adm-zip@0.4.7',
        vulns: [
          {
            id: 'npm:adm-zip:20180415',
            severity: 'high',
            title: 'Arbitrary File Write via Archive Extraction (Zip Slip)',
          },
        ],
      },
    ];
    expect(getUpgrades(upgrade, vulnerabilities)).toEqual(expected);
  });
});

describe('getSeverityScore', () => {
  it('with empty data', () => {
    expect(getSeverityScore([])).toBe(0);
  });

  it('with data length 1', () => {
    const vulnerabilities = [
      {
        id: 'npm:adm-zip:20180415',
        severity: 'high',
        title: 'Arbitrary File Write via Archive Extraction (Zip Slip)',
      },
    ];
    expect(getSeverityScore(vulnerabilities)).toBe(3);
  });

  it('with multiple vulnerabilities', () => {
    const vulnerabilities = [
      { id: 'npm:adm-zip:20180415', severity: 'critical', title: 'Zip Slip' },
      { id: 'npm:adm-zip:20180415', severity: 'high', title: 'Zip Slip' },
      { id: 'patch:npm:hoek:20180212:1', severity: 'low', title: 'Zip Slip' },
      { id: 'SNYK-JAVA-OGNL-30474', severity: 'medium', title: 'Zip Slip' },
    ];
    expect(getSeverityScore(vulnerabilities)).toBe(10);
  });
});

describe('addIssueDataToPatch', () => {
  it('with data', () => {
    const patch = {
      'SNYK-JS-LODASH-567746': {
        paths: [
          {
            'twilio > request > form-data > async > lodash': {
              patched: '2020-05-05T12:32:26.033Z',
            },
          },
        ],
      },
    };
    const vulnerabilities = [
      JSON.parse(fs.readFileSync(patchableVulnPath, 'utf-8')),
    ];
    const expected = [
      {
        issueData: {
          severity: 'medium',
          title: 'Prototype Pollution',
          id: 'SNYK-JS-LODASH-567746',
        },
        paths: [
          {
            'twilio > request > form-data > async > lodash': {
              patched: '2020-05-05T12:32:26.033Z',
            },
          },
        ],
        name: 'lodash',
        version: '4.17.15',
        severityScore: 1,
      },
    ];
    expect(addIssueDataToPatch(patch, vulnerabilities)).toEqual(expected);
  });
});

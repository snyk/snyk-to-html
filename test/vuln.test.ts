import * as fs from 'fs';
import * as path from 'path';
import { test } from 'tap';
import { getSeverityScore, getUpgrades } from '../src/lib/vuln';

const admZipVulnPath = path.join(__dirname, 'fixtures', 'adm-zip.vuln.json');

test('getUpgrades with empty data', async (t) => {
  // Arrange
  const upgrade = {};
  const vulnerabilities = {};
  const expected = [];
  // Act
  const result = getUpgrades(upgrade, vulnerabilities);
  // Assert
  t.same(result, expected, 'should return empty array');
});

test('getUpgrades with data', async (t) => {
  // Arrange
  const upgrade = {
    'adm-zip@0.4.7': {
      upgradeTo: 'adm-zip@0.4.11',
      upgrades: [
        'adm-zip@0.4.7',
      ],
      vulns: [
        'npm:adm-zip:20180415',
      ],
    },
  };
  const vulnerabilities = [JSON.parse(fs.readFileSync(admZipVulnPath, 'utf-8'))];
  const expected = [{
    severityScore: 3,
    upgradeTo: 'adm-zip@0.4.11',
    upgradeFrom: 'adm-zip@0.4.7',
    vulns: [{
      id: 'npm:adm-zip:20180415',
      severity: 'high',
      title: 'Arbitrary File Write via Archive Extraction (Zip Slip)',
    }],
  }];
  // Act
  const result = getUpgrades(upgrade, vulnerabilities);
  // Assert
  t.same(result, expected, 'should return expected array');
});

test('getSeverityScore with empty data', async (t) => {
  // Arrange
  const vulnerabilities = [];
  const expected = 0;
  // Act
  const result = getSeverityScore(vulnerabilities);
  // Assert
  t.same(result, expected, 'should return 0');
});

test('getSeverityScore with data length 1', async (t) => {
  // Arrange
  const vulnerabilities = [
    {
      id: 'npm:adm-zip:20180415',
      severity: 'high',
      title: 'Arbitrary File Write via Archive Extraction (Zip Slip)',
    },
  ];
  const expected = 3;
  // Act
  const result = getSeverityScore(vulnerabilities);
  // Assert
  t.same(result, expected, 'should return expected severity score');
});

test('getSeverityScore with multiple vulns', async (t) => {
  // Arrange
  const vulnerabilities = [
    {
      id: 'npm:adm-zip:20180415',
      severity: 'high',
      title: 'Arbitrary File Write via Archive Extraction (Zip Slip)',
    },
    {
      id: 'patch:npm:hoek:20180212:1',
      severity: 'low',
      title: 'Arbitrary File Write via Archive Extraction (Zip Slip)',
    },
    {
      id: 'SNYK-JAVA-OGNL-30474',
      severity: 'medium',
      title: 'Arbitrary File Write via Archive Extraction (Zip Slip)',
    },
  ];
  const expected = 6;
  // Act
  const result = getSeverityScore(vulnerabilities);
  // Assert
  t.same(result, expected, 'should return expected severity score');
});

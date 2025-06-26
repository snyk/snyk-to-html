import { describe, expect, it } from '@jest/globals';

import * as path from 'node:path';
import * as util from 'node:util';
import * as childProcess from 'child_process';

const exec = util.promisify(childProcess.exec);

const cleanTimestamp = (rep: string): string => {
  const regex = /<p class="timestamp">.*<\/p>/g;
  return rep.replace(regex, '<p class="timestamp">TIMESTAMP</p>');
};

describe('test calling snyk-to-html from command line', () => {
  const main = '.'.replace(/\//g, path.sep);

  it('should not throw an exception', async () => {
    const { stdout, stderr } = await exec(
      `node ${main} -i ./test/fixtures/multi-test-report.json`,
      {
        maxBuffer: 1024 * 1024,
      },
    );
    expect(stderr).toEqual('');

    expect(stdout).toContain('<html lang="en">');
  });

  it('handles the -s argument correctly', async () => {
    const { stdout, stderr } = await exec(
      `node ${main} -i ./test/fixtures/test-report-with-remediation.json -s`,
      {
        maxBuffer: 1024 * 1024,
      },
    );
    expect(stderr).toEqual('');

    const cleanedReport = cleanTimestamp(stdout);
    expect(cleanedReport).not.toContain('<h2>Overview</h2>');
    expect(cleanedReport).toMatchSnapshot();
  });

  it('handles the -a argument correctly', async () => {
    const { stdout, stderr } = await exec(
      `node ${main} -i ./test/fixtures/test-report-with-remediation.json -a`,
      {
        maxBuffer: 1024 * 1024,
      },
    );
    expect(stderr).toEqual('');

    const cleanedReport = cleanTimestamp(stdout);
    expect(cleanedReport).toContain(
      '<body class="test-remediation-section-projects">',
    );
    expect(cleanedReport).toMatchSnapshot();
  });

  it.each([
    {
      args: '--actionable-remediation',
    },
    {
      args: '--actionable-remediation --summary',
    },
  ])(
    `shows remediation with vulnerabilities when running: $args`,
    async ({ args }) => {
      const { stdout, stderr } = await exec(
        `node ${main} -i ./test/fixtures/test-report-with-pins-remediation.json ${args}`,
        {
          maxBuffer: 1024 * 1024,
        },
      );
      expect(stderr).toEqual('');

      const cleanedReport = cleanTimestamp(stdout);
      if (args.includes('--summary')) {
        expect(cleanedReport).not.toContain('<h2 id="overview">Overview</h2>');
      } else {
        expect(cleanedReport).toContain('<h2 id="overview">Overview</h2>');
      }

      expect(cleanedReport).toContain(
        '<body class="test-remediation-section-projects">',
      );
      expect(cleanedReport).toContain(
        "<div class='remediation-card__pane shown test-remediation-pins'",
      );
      expect(cleanedReport).toMatchSnapshot();
    },
  );

  it('does not fail when called with IaC specific JSON', async () => {
    const { stdout, stderr } = await exec(
      `node ${main} -i ./test/fixtures/iac-test-report.json`,
      {
        maxBuffer: 1024 * 1024,
      },
    );
    expect(stderr).toEqual('');

    expect(stdout).toContain('<html lang="en">');
  });

  it('handles the -s argument correctly when called with IaC specific JSON', async () => {
    const { stdout, stderr } = await exec(
      `node ${main} -i ./test/fixtures/iac-test-report.json -s`,
      {
        maxBuffer: 1024 * 1024,
      },
    );
    expect(stderr).toEqual('');

    const cleanedReport = cleanTimestamp(stdout);
    expect(cleanedReport).not.toContain('<h2>Impact</h2>');
    expect(cleanedReport).not.toContain('<h2>Remediation</h2>');
    expect(cleanedReport).not.toContain('<h2>References</h2>');
    expect(cleanedReport).toMatchSnapshot();
  });

  it('handles code input with OpenRefine', async () => {
    const { stdout, stderr } = await exec(
      `node ${main} -i ./test/fixtures/test-code-openrefine.json `,
      {
        maxBuffer: 1024 * 1024,
      },
    );
    expect(stderr).toEqual('');

    const cleanedReport = cleanTimestamp(stdout);
    expect(cleanedReport).toContain('<strong>12</strong> high issues');
    expect(cleanedReport).toContain('<strong>14</strong> medium issues');
    expect(cleanedReport).toContain('<li class="card__meta__item">CWE-23</li>');
    expect(cleanedReport).toContain(
      'Unsanitized input from a zip file flows into java.io.FileOutputStream, where it is used as a path. This may result in a Path Traversal vulnerability and allow an attacker to write to arbitrary files.',
    );
    expect(cleanedReport).toContain('dataflow');
  });

  it('handles code input with AltoroJ', async () => {
    const { stdout, stderr } = await exec(
      `node ${main} -i ./test/fixtures/test-code-altoroj.json `,
      {
        maxBuffer: 1024 * 1024,
      },
    );
    expect(stderr).toEqual('');

    const cleanedReport = cleanTimestamp(stdout);
    expect(cleanedReport).not.toContain('<h2>Overview</h2>');
    expect(cleanedReport).toContain('<strong>14</strong> high issues');
    expect(cleanedReport).toContain('<strong>5</strong> medium issues');
    expect(cleanedReport).toContain('<li class="card__meta__item">CWE-79</li>');
    expect(cleanedReport).toContain(
      'Unsanitized input from an HTTP header flows into executeQuery, where it is used in an SQL query. This may result in an SQL Injection vulnerability.',
    );
    expect(cleanedReport).toContain('OperationsUtil.java');
  });

  it('handles unmanaged c/c++', async () => {
    const { stdout, stderr } = await exec(
      `node ${main} -i ./test/fixtures/test-report-unmanaged-cpp.json`,
      {
        maxBuffer: 1024 * 1024,
      },
    );
    expect(stderr).toEqual('');

    const cleanedReport = cleanTimestamp(stdout);
    expect(cleanedReport).toContain(
      '<li class="paths">/Users/dagrest/Documents/Snyk/git/temp/cpp-goof (Unmanaged (C/C++))</li>',
    );
    expect(cleanedReport).toContain(
      '<div class="meta-count"><span>41</span> <span>known vulnerabilities</span></div>',
    );
    expect(cleanedReport).toContain(
      '<div class="meta-count"><span>4</span> <span>dependencies</span></div>',
    );
    expect(cleanedReport).toContain('<h2 id="overview">Overview</h2>');
    expect(cleanedReport).toContain('<h2 id="remediation">Remediation</h2>');
    expect(cleanedReport).toContain(
      '<p>Upgrade <code>curl</code> to version 7.60.0 or higher.</p>',
    );

    expect(cleanedReport).not.toContain(
      '<div class="meta-count"><span>41 vulnerable dependency paths</span></div>',
    );
    expect(cleanedReport).not.toContain(
      '<li class="card__meta__item">Introduced through: https://curl.se|curl@7.58.0\n</li>',
    );
    expect(cleanedReport).not.toContain(
      '<h3 class="card__section__title">Detailed paths</h3>',
    );
  });
});

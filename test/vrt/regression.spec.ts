import { expect, test } from '@playwright/test';

import * as os from 'node:os';
import * as childProcess from 'child_process';
import * as path from 'node:path';
import * as util from 'node:util';
import * as fs from 'node:fs';

const exec = util.promisify(childProcess.exec);

const main = '.'.replace(/\//g, path.sep);

const replacements = [
  {
    regex: /<p class="timestamp">.*<\/p>/g,
    replace: '<p class="timestamp">TIMESTAMP</p>',
  },
  {
    regex: /<div class="filepath[\s\S]*?<\/div>/g,
    replace: '<div class="filepath">FILEPATH</div>',
  },
];

// Our CI/CD pipelines runs on Linux. If you are running this on another operating system, these tests will create
// new snapshots on the first run, as Playwright postfixes the names with the platform they're executed on.
// With right, as the visual representation of a website in a browser on Linux might look different from on a Mac.
// We've supplied a convenience script to test and update these screenshots locally, that runs Playwright through
// an interactive Docker container.
// Run the tests by executing the command (from the root of this project):
// * ./test/vrt/run-test-on-linux.sh npm run test:vrt
// And to update snapshots:
// * ./test/vrt/run-test-on-linux.sh npm run test:vrt:update
test.describe('Visual Regression Tests (VRTs)', () => {
  [
    {
      description: 'no extra arguments',
      command: '-i ./test/fixtures/test-report.json',
    },
    {
      description: 'with actionable remediation',
      command: '-i ./test/fixtures/test-report.json -a',
    },
    {
      description: 'with summary',
      command: '-i ./test/fixtures/test-report.json -s',
    },
  ].forEach(({ description, command }) => {
    test(`A sample test report generated with ${description}`, async ({
      page,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, testInfo) => {
      const tempFilePath = path.join(os.tmpdir(), `temp-${Date.now()}.html`);

      const { stdout, stderr } = await exec(`node ${main} ${command}`, {
        maxBuffer: 1024 * 1024,
      });
      expect(stderr).toBe('');

      let reportWithoutDynamicContent = stdout;
      replacements.forEach(({ regex, replace }) => {
        reportWithoutDynamicContent = reportWithoutDynamicContent.replace(
          regex,
          replace,
        );
      });

      fs.writeFileSync(tempFilePath, reportWithoutDynamicContent, 'utf8');

      await page.goto(`file://${tempFilePath}`);
      await expect(page).toHaveScreenshot();
    });
  });

  test('A sample snyk code (interactive) report', async ({ page }) => {
    const tempFilePath = path.join(os.tmpdir(), `temp-${Date.now()}.html`);

    const { stdout, stderr } = await exec(
      `node ${main} -i ./test/fixtures/test-code-openrefine.json`,
      {
        maxBuffer: 1024 * 1024,
      },
    );
    expect(stderr).toBe('');

    let reportWithoutDynamicContent = stdout;
    replacements.forEach(({ regex, replace }) => {
      reportWithoutDynamicContent = reportWithoutDynamicContent.replace(
        regex,
        replace,
      );
    });

    fs.writeFileSync(tempFilePath, reportWithoutDynamicContent, 'utf8');

    await page.goto(`file://${tempFilePath}`);
    await page
      .getByText('Data Flow')
      .first()
      .check();
    await expect(page).toHaveScreenshot();

    await page
      .getByText('Fix Analysis')
      .first()
      .check();
    await expect(page).toHaveScreenshot();
  });
});

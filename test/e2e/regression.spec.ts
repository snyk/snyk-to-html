import { expect, test } from '@playwright/test';

import * as os from 'node:os';
import * as childProcess from 'child_process';
import * as path from 'node:path';
import * as util from 'node:util';
import * as fs from 'node:fs';

const exec = util.promisify(childProcess.exec);

const main = '.'.replace(/\//g, path.sep);

test.describe('Visual Regression Tests (VRTs)', () => {
  test('A sample test report', async ({ page }) => {
    const tempFilePath = path.join(os.tmpdir(), `temp-${Date.now()}.html`);

    const { stdout, stderr } = await exec(
      `node ${main} -i ./test/fixtures/test-report.json`,
      {
        maxBuffer: 1024 * 1024,
      },
    );
    expect(stderr).toBe('');

    const reportWithoutTimestamps = stdout.replace(
      /<p class="timestamp">.*<\/p>/g,
      '<p class="timestamp">TIMESTAMP</p>',
    );

    fs.writeFileSync(tempFilePath, reportWithoutTimestamps, 'utf8');

    await page.goto(`file://${tempFilePath}`);
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test('A sample snyk code (interactive) report', async ({ page }) => {
    const tempFilePath = path.join(os.tmpdir(), `temp-${Date.now()}.html`);

    const { stdout, stderr } = await exec(
      `node ${main} -i ./test/fixtures/test-code-openrefine.json `,
      {
        maxBuffer: 1024 * 1024,
      },
    );
    expect(stderr).toBe('');

    const reportWithoutTimestamps = stdout.replace(
      /<p class="timestamp">.*<\/p>/g,
      '<p class="timestamp">TIMESTAMP</p>',
    );

    fs.writeFileSync(tempFilePath, reportWithoutTimestamps, 'utf8');

    await page.goto(`file://${tempFilePath}`);
    await page.getByText('Data Flow').first().check();
    await expect(page).toHaveScreenshot({ fullPage: true });

    await page.getByText('Fix Analysis').first().check();
    await expect(page).toHaveScreenshot({ fullPage: true });
  });
});

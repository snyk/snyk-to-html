import { defineConfig, devices } from '@playwright/test';

// See https://playwright.dev/docs/test-configuration.
export default defineConfig({
  testDir: './test/vrt',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  timeout: 25 * 1000,
  expect: {
    timeout: 60 * 1000,
    toHaveScreenshot: {
      threshold: 0.3,
    },
  },
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', { open: 'on-failure', outputFolder: 'playwright-report' }],
  ],
  outputDir: 'playwright-output',
  use: {
    actionTimeout: 0,
    screenshot: 'on',
    trace: 'off',
    video: 'off',
    viewport: { width: 1920, height: 1080 },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});

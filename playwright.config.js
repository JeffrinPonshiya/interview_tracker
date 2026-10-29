import { defineConfig } from '@playwright/test';
import { randomBytes } from 'node:crypto';

process.env.IPT_E2E_ADMIN_EMAIL ||= `admin-${randomBytes(8).toString('hex')}@example.test`;
process.env.IPT_E2E_ADMIN_PASSWORD ||= randomBytes(24).toString('base64url');

export default defineConfig({
  testDir: './tests/browser',
  fullyParallel: false,
  workers: 1,
  timeout: 120000,
  reporter: 'list',
  outputDir: 'artifacts/browser',
  use: {
    baseURL: 'http://127.0.0.1:5180',
    browserName: 'chromium',
    channel: 'chrome',
    trace: 'retain-on-failure',
  },
  globalSetup: './tests/browser/setup.js',
});

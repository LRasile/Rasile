import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'pages',
      testMatch: 'tests/pages.spec.ts',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'performance',
      testMatch: 'tests/performance.spec.ts',
      dependencies: ['pages'],
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'yarn dev',
    url: 'http://localhost:3000',
    reuseExistingServer: true,
    timeout: 120 * 1000,
  },
})

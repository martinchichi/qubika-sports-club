import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false,
    baseURL: process.env.BASE_URL || 'https://club-administration.qa.qubika.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});

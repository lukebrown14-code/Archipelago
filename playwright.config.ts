import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: "list",
  outputDir: "test-results/",
  use: {
    baseURL: "http://localhost:4321",
    headless: true,
  },
  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium" },
    },
  ],
  webServer: {
    command: "bun run build && bun run preview",
    port: 4321,
    reuseExistingServer: !process.env.CI,
  },
});

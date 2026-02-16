import { test, expect } from "@playwright/test";

test.describe("Dark mode", () => {
  test.beforeEach(async ({ page }) => {
    // Clear any stored theme preference
    await page.goto("/");
    await page.evaluate(() => localStorage.removeItem("theme"));
    await page.reload();
  });

  test("toggle button adds dark class to html", async ({ page }) => {
    const html = page.locator("html");
    await expect(html).not.toHaveClass(/dark/);

    await page.locator("#theme-toggle").click();
    await expect(html).toHaveClass(/dark/);
  });

  test("clicking again removes dark class", async ({ page }) => {
    const html = page.locator("html");
    const toggle = page.locator("#theme-toggle");

    await toggle.click();
    await expect(html).toHaveClass(/dark/);

    await toggle.click();
    await expect(html).not.toHaveClass(/dark/);
  });

  test("theme persists in localStorage", async ({ page }) => {
    await page.locator("#theme-toggle").click();

    const stored = await page.evaluate(() => localStorage.getItem("theme"));
    expect(stored).toBe("dark");

    await page.locator("#theme-toggle").click();
    const storedAfter = await page.evaluate(() => localStorage.getItem("theme"));
    expect(storedAfter).toBe("light");
  });
});

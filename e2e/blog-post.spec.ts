import { test, expect } from "@playwright/test";

test.describe("Blog post features", () => {
  test("progress bar exists and starts at 0% width", async ({ page }) => {
    await page.goto("/blog/group-hoilday");
    const bar = page.locator("#progress-bar");
    await expect(bar).toBeAttached();
    const width = await bar.evaluate((el) => el.style.width);
    expect(width).toBe("0%");
  });

  test("table of contents renders for posts with headings", async ({ page }) => {
    await page.goto("/blog/investing-copper");
    const toc = page.locator("[data-toc]");
    await expect(toc).toBeVisible();

    const tocLinks = page.locator("[data-toc-link]");
    expect(await tocLinks.count()).toBeGreaterThan(0);
  });

  test("TOC links point to valid heading anchors", async ({ page }) => {
    await page.goto("/blog/investing-copper");
    const tocLinks = page.locator("[data-toc-link]");
    const count = await tocLinks.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const href = await tocLinks.nth(i).getAttribute("href");
      expect(href).toBeTruthy();
      // href is like "#some-slug", verify the target element exists
      const targetId = href!.replace("#", "");
      const exists = await page.evaluate(
        (id) => document.getElementById(id) !== null,
        targetId,
      );
      expect(exists).toBe(true);
    }
  });
});

import { test, expect } from "@playwright/test";

test.describe("Category filter", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/blog");
  });

  test("all posts visible by default", async ({ page }) => {
    const posts = page.locator("#post-list a[data-category]");
    const count = await posts.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      await expect(posts.nth(i)).toBeVisible();
    }
  });

  test("clicking a category hides non-matching posts", async ({ page }) => {
    const filterBtn = page.locator(".filter-btn").filter({ hasNotText: "ALL" }).first();
    const category = await filterBtn.getAttribute("data-filter");
    await filterBtn.click();

    const posts = page.locator("#post-list a[data-category]");
    const count = await posts.count();

    for (let i = 0; i < count; i++) {
      const post = posts.nth(i);
      const postCategory = await post.getAttribute("data-category");
      if (postCategory === category) {
        await expect(post).toBeVisible();
      } else {
        await expect(post).toBeHidden();
      }
    }
  });

  test("clicking ALL shows all posts again", async ({ page }) => {
    // First filter by a category
    const filterBtn = page.locator(".filter-btn").filter({ hasNotText: "ALL" }).first();
    await filterBtn.click();

    // Then click ALL
    await page.locator("button[data-filter='all']").click();

    const posts = page.locator("#post-list a[data-category]");
    const count = await posts.count();
    for (let i = 0; i < count; i++) {
      await expect(posts.nth(i)).toBeVisible();
    }
  });
});

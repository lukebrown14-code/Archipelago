import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("home page loads with Archipelago header", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("header a[href='/']")).toHaveText("Archipelago");
  });

  test("about page loads with correct heading", async ({ page }) => {
    await page.goto("/about");
    await expect(page.locator("h1")).toContainText("About");
  });

  test("blog list shows articles", async ({ page }) => {
    await page.goto("/blog");
    const articles = page.locator("#post-list a[data-category]");
    await expect(articles.first()).toBeVisible();
    expect(await articles.count()).toBeGreaterThan(0);
  });

  test("blog post page loads with correct title", async ({ page }) => {
    await page.goto("/blog/group-hoilday");
    await expect(page.locator("h1")).toContainText("Group Booking App");
  });

  test("404 page shows error message", async ({ page }) => {
    await page.goto("/this-page-does-not-exist");
    await expect(page.locator("h1")).toContainText("404");
    await expect(page.locator("text=drifted beyond the archipelago")).toBeVisible();
  });

  test("header About link navigates to about page", async ({ page }) => {
    await page.goto("/");
    await page.locator("header nav a[href='/about']").click();
    await expect(page).toHaveURL("/about");
    await expect(page.locator("h1").first()).toContainText("About");
  });

  test("header RSS link points to rss.xml", async ({ page }) => {
    await page.goto("/");
    const rssLink = page.locator("header nav a[href='/rss.xml']");
    await expect(rssLink).toBeVisible();
    await expect(rssLink).toHaveAttribute("href", "/rss.xml");
  });

  test("blog post prev/next navigation works", async ({ page }) => {
    await page.goto("/blog/group-hoilday");
    const navLinks = page.locator("nav a[href^='/blog/']");
    const count = await navLinks.count();
    expect(count).toBeGreaterThan(0);

    await navLinks.first().click();
    await expect(page).toHaveURL(/\/blog\/.+/);
    await expect(page.locator("h1").first()).toBeVisible();
  });

  test("back link on blog post returns home", async ({ page }) => {
    await page.goto("/blog/group-hoilday");
    await page.locator("a[href='/']", { hasText: "Back" }).click();
    await expect(page).toHaveURL("/");
  });
});

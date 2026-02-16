import { describe, expect, it } from "vitest";
import { formatDate } from "../formatDate";

describe("formatDate", () => {
  it("formats a date correctly", () => {
    expect(formatDate(new Date("2026-02-03"))).toBe("February 3, 2026");
  });

  it("handles different months and days", () => {
    expect(formatDate(new Date("2025-07-15"))).toBe("July 15, 2025");
    expect(formatDate(new Date("2024-12-25"))).toBe("December 25, 2024");
  });
});

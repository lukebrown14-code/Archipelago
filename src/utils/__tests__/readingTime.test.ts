import { describe, expect, it } from "vitest";
import { getReadingTime } from "../readingTime";

describe("getReadingTime", () => {
  it("returns null when body is undefined", () => {
    expect(getReadingTime()).toBeNull();
    expect(getReadingTime(undefined)).toBeNull();
  });

  it("returns null for empty string", () => {
    expect(getReadingTime("")).toBeNull();
  });

  it("returns 1 for very short text", () => {
    expect(getReadingTime("Hello world")).toBe(1);
  });

  it("returns correct minute count for longer text", () => {
    const words = Array(460).fill("word").join(" ");
    expect(getReadingTime(words)).toBe(2);
  });
});

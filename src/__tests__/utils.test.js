import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for a palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns false for a non-palindrome", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  it("throws an error for non-string input", () => {
    expect(() => isPalindrome(12321)).toThrow("Input must be a string");
  });

  it("throws an error for non-alphabetic characters", () => {
    expect(() => isPalindrome("12321")).toThrow("Only alphabetic characters are allowed");
  });
});

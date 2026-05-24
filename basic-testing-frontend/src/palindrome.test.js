import { it, expect, describe } from "vitest";
import { palindrome } from "./palindrome";

describe("palindrome()", () => {
  it("should throw if empty or undefined value is provided", () => {
    // Arrange
    const text = "";

    // Assert
    expect(() => palindrome(text)).toThrow();
  });

  it("should return true for palindrome words", () => {
    // Arrange
    const text = "Arara";

    // Act
    const result = palindrome(text);

    // Assert
    expect(result).toBe(true);
  });

  it("should return false for non palindrome words", () => {
    // Arrange
    const text = "Testando";

    // Act
    const result = palindrome(text);

    // Assert
    expect(result).toBe(false);
  });
});

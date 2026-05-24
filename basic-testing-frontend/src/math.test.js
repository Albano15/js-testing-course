import { expect, it } from "vitest";
import { add } from "./math";

it("should summarize all numbers values in an array", () => {
  // Arrange
  const numbers = [1, 2];
  const expectedResults = numbers.reduce(
    (prevValue, curValue) => prevValue + curValue,
    0,
  );
  // Act
  const result = add(numbers);

  // Assert
  expect(result).toBe(expectedResults);
});

it("should yield NaN if a least one invalid number is provided", () => {
  const inputs = ["invalid", 1];
  const result = add(inputs);

  expect(result).toBe(NaN);
});

it("should yield correct sum if an array of numeric string values is provided", () => {
  // Arrange
  const numbers = ["1", "2"];
  const expectedResults = numbers.reduce(
    (prevValue, curValue) => +prevValue + +curValue,
    0,
  );
  // Act
  const result = add(numbers);

  // Assert
  expect(result).toBe(expectedResults);
});

it("should yield 0 if an empty array is provided", () => {
  let emptyArray = [];

  const result = add(emptyArray);

  expect(result).toBe(0);
});

it("should throw an error if parameter isnt passed into the function", () => {
  const result = () => {
    add();
  };

  expect(result).toThrow(/Not numbers defined/);
});

it("should throw an error if provided with multiple arguments insted of array", () => {
  const num1 = 1;
  const num2 = 2;

  const result = () => {
    add(num1, num2);
  }

  expect(result).toThrow(/is not iterable/);
})

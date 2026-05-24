import { expect, it } from "vitest";
import { add } from "./math"

it('should summarize all numbers values in an array', () => {
  // Arrange
  const numbers = [1, 2];
  const expectedResults = numbers.reduce((prevValue, curValue) => 
    prevValue + curValue , 0)
  // Act
  const result = add(numbers);
  
  // Assert
  expect(result).toBe(expectedResults);
})

it('should yield NaN if a least one invalid number is provided', () => {
  const inputs = ['invalid', 1];
  const result = add(inputs);

  expect(result).toBe(NaN);
})

it('should yield Na correct sum if an array of numeric string values is provided', () => {
  // Arrange
  const numbers = ['1', '2'];
  const expectedResults = numbers.reduce((prevValue, curValue) => 
    +prevValue + +curValue , 0)
  // Act
  const result = add(numbers);
  
  // Assert
  expect(result).toBe(expectedResults);
})
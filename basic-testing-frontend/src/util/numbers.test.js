import { it, expect, describe } from "vitest";
import { transformToNumber } from "./numbers"


describe('transformToNumber()', () => {
  it("should transform a string number to a number of type Number", () => {
  const value = "3";

  const result = transformToNumber(value);

  expect(result).toBe(+value).toBeTypeOf('number');
});

it("should yield NaN for non-transformable values", () => {
  const value = 'error';
  const value1 = {};
  
  const result = transformToNumber(value);
  const result1 = transformToNumber(value1);

  expect(result).toBeNaN();
  expect(result1).toBeNaN();
});


it("should yield NaN if nothing is passed into the function", () => {
  const result = transformToNumber();
  
  expect(result).toBeNaN();
});

it("should yield a correct number if a number is provided", () => {
  const value = 3;

  const result = transformToNumber(value);

  expect(result).toBe(value);
});
});

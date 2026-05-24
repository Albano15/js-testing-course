import {it, expect} from "vitest";
import { transformToNumber } from "./numbers"

it("should transform a string number to a number of type Number", () => {
  const value = "3";

  const result = transformToNumber(value);

  expect(result).toBeTypeOf('number');
});

it("should yield NaN for non-transformable values", () => {
  const value = 'error';
  
  const result = transformToNumber(value);

  expect(result).toBeNaN();
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
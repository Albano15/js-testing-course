import { it, expect, describe } from 'vitest';
import { validateNumber, validateStringNotEmpty} from './validation';

describe('validateStringNotEmpty()', () => {
  it("should throw an error if value is empty", () => {
  const value = '';

  const result = () => validateStringNotEmpty(value);

  expect(result).toThrow("Invalid input - must not be empty.");

})

});

describe('validateNumber()', () => {
  it("should yield an error if value is NaN", () => {
    const value = 'error';
    const value1 = NaN;
    
    const result = () => validateNumber(value);
    const result1 = () => validateNumber(value1);
    
    expect(result).toThrow("Invalid number input.");
    expect(result1).toThrow("Invalid number input.")
  })
});

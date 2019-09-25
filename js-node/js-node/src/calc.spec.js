import { sum, subtract } from './calc';

describe('calculator', () => {
  describe('sum', () => {
    test('sum', () => {
      const result = sum(1, 2);
      expect(result).toBe(3);
    });

    test('sumWithNegativeNumber', () => {
      const result = sum(-1, 1);
      expect(result).toBe(0);
    });
    test('sumWithTwoNegativeNumber', () => {
      const result = sum(-1, -1);
      expect(result).toBe(-2);
    });
    test('sumWithAString', () => {
      expect(() => sum('hello', 1)).toThrowError(Error('Value must be a number'));
    });
    test('sumWithOneParam', () => {
      expect(() => sum(1)).toThrowError(Error('Value must be a number'));
    });
    test('sumWithObject', () => {
      expect(() => sum(1, { value: 3 })).toThrowError(Error('Value must be a number'));
    });
    test('sumWithNoParam', () => {
      const result = sum();
      expect(result).toBe(NaN);
    });
    test('sumWithArray', () => {
      expect(() => sum([], [])).toThrowError(Error('Value must be a number'));
    });
    test('sumWithTooManyParam', () => {
      const result = sum(1, 1, 1);
      expect(result).toBe(2);
    });
  });

  describe('subtract', () => {
    test('subtract', () => {
      const result = subtract(3, 2);
      expect(result).toBe(1);
    });
  });
});

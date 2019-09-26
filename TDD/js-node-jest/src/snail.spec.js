import snail from './snail';

describe('Snail', () => {
  test('snail with 2', () => {
    const snailResult = snail([[1, 2], [3, 4]]);

    expect(snailResult).toEqual([1, 2, 4, 3]);
  });
  test('snail with 3', () => {
    const snailResult = snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

    expect(snailResult).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });
  test('snail with 4', () => {
    const snailResult = snail([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]);

    expect(snailResult).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
  });
});

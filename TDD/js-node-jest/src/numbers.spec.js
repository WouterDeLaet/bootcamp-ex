import arabicToRoman from './numbers';

describe('Arabic numbers to Roman numbers', () => {
  test('from 1 to I', () => {
    const romanNumber = arabicToRoman(1);

    expect(romanNumber).toBe('I');
  });

  test('from 3 to III', () => {
    const romanNumber = arabicToRoman(3);

    expect(romanNumber).toBe('III');
  });

  test('from 5 to V', () => {
    const romanNumber = arabicToRoman(5);

    expect(romanNumber).toBe('V');
  });

  test('from 4 to IV', () => {
    const romanNumber = arabicToRoman(4);

    expect(romanNumber).toBe('IV');
  });
  test('from 6 to VI', () => {
    const romanNumber = arabicToRoman(6);

    expect(romanNumber).toBe('VI');
  });
  test('from 7 to VII', () => {
    const romanNumber = arabicToRoman(7);

    expect(romanNumber).toBe('VII');
  });
  test('from 10 to X', () => {
    const romanNumber = arabicToRoman(10);

    expect(romanNumber).toBe('X');
  });
});

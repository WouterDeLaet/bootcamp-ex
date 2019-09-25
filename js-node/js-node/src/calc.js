export function sum(a, b) {
  if ((!a && !b) || (typeof a === 'number' && typeof b === 'number')) {
    return a + b;
  }
  throw new Error('Value must be a number');
}

export function subtract(a, b) {
  return a - b;
}

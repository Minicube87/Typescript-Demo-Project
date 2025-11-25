import { add, subtract } from '../src/utils';

describe('Utils', () => {
  test('adds two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('subtracts two numbers', () => {
    expect(subtract(2, 1)).toBe(1);
  });
});

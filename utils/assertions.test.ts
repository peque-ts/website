import { assertString } from './assertions';

describe('assertions', () => {
  test('#assertString', () => {
    expect(() => assertString('input')).not.toThrowError();
    expect(() => assertString(123)).toThrowError();
  });
});

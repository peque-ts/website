import { assertArray, assertString } from './assertions';

describe('assertions', () => {
  test('#assertString', () => {
    expect(() => assertString('input')).not.toThrowError();
    expect(() => assertString(123)).toThrowError();
  });

  test('#assertArray', () => {
    expect(() => assertArray<string>(['input'])).not.toThrowError();
    expect(() => assertArray(123)).toThrowError();
  });
});

export function assertString(input: unknown): asserts input is string {
  if (typeof input !== 'string') {
    throw new TypeError(`'input' type must be string, but received ${typeof input}`);
  }
}

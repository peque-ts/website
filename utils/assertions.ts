export function assertString(input: unknown): asserts input is string {
  if (typeof input !== 'string') {
    throw new TypeError(`'input' type must be string, but received ${typeof input}`);
  }
}

export function assertArray<T>(input: unknown): asserts input is T[] {
  if (!Array.isArray(input)) {
    throw new TypeError(`'input' type must be array, but received ${typeof input}`);
  }
}

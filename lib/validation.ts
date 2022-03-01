import { HttpError } from './error';

export const SEARCH_MAX_LENGTH = 50;

export function validate(q: unknown): asserts q is string {
  if (typeof q !== 'string') {
    throw new HttpError('Parameter [q] must be string.', 422);
  }

  if (q.trim() === '') {
    throw new HttpError('Parameter [q] cannot be empty.', 400);
  }

  if (q.length > SEARCH_MAX_LENGTH) {
    throw new HttpError('Parameter [q] must be shorter than 50 characters.', 400);
  }
}

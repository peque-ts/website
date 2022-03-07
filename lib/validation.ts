import { ProjectId, PROJECTS } from './data';
import { HttpError } from './error';

export const SEARCH_QUERY_MAX_LENGTH = 50;

export function validateQuery(q: unknown): asserts q is string {
  if (typeof q !== 'string') {
    throw new HttpError('Parameter [q] must be string.', 422);
  }

  if (q.trim() === '') {
    throw new HttpError('Parameter [q] cannot be empty.', 400);
  }

  if (q.length > SEARCH_QUERY_MAX_LENGTH) {
    throw new HttpError('Parameter [q] must be shorter than 50 characters.', 400);
  }
}

export function validateProject(p: unknown): asserts p is ProjectId {
  if (!Object.keys(PROJECTS).includes(p as string)) {
    throw new HttpError('Parameter [p] must be a project id.', 400);
  }
}

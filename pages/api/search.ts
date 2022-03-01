import { NextApiRequest, NextApiResponse } from 'next';

import { HttpError, withErrorHandler } from '../../lib/error';
import { SearchResult } from '../../types/search-result';

interface ResponseData {
  results: SearchResult[];
}

function validate(q: unknown): asserts q is string {
  if (typeof q !== 'string') {
    throw new HttpError('Parameter [q] must be string.', 422);
  }

  if (q.trim() === '') {
    throw new HttpError('Parameter [q] cannot be empty.', 400);
  }

  if (q.length > 40) {
    throw new HttpError('Parameter [q] must be shorter than 50 characters.', 400);
  }
}

function search(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  validate(req.query.q);

  res.send({
    results: [
      {
        title: req.query.q,
        description: '',
        link: '',
      },
    ],
  });
}

export default withErrorHandler(search);

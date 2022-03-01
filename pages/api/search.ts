import { NextApiRequest, NextApiResponse } from 'next';

import { withErrorHandler } from '../../lib/error';
import { validate } from '../../lib/validation';
import { SearchResult } from '../../types/search-result';

interface ResponseData {
  results: SearchResult[];
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

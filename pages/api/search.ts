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
        title: 'Architecture',
        description: 'You may have seen this somewhere',
        link: '/docs/framework/architecture',
      },
      {
        title: 'Free Pizza',
        description: 'Who does not want to get a free pizza?',
        link: '/docs/framework/getting-started',
      },
    ],
  });
}

export default withErrorHandler(search);

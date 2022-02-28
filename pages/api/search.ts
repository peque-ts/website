import { NextApiRequest, NextApiResponse } from 'next';

import type { SearchResult } from '../../components/Search/use-search.types';

interface Data {
  results: SearchResult[];
}

export default function search(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log(req.query.q);
  res.send({
    results: [
      {
        title: req.query.q.toString(),
        description: '',
        link: '',
      },
    ],
  });
}

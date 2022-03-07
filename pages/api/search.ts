import { NextApiRequest, NextApiResponse } from 'next';

import cache from '../../cache.json';
import { withErrorHandler } from '../../lib/error';
import { validateProject, validateQuery } from '../../lib/validation';
import { SearchResult } from '../../types/search-result';

interface ResponseData {
  results: SearchResult[];
}

function search(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const { p, q } = req.query;

  validateProject(p);
  validateQuery(q);

  res.send({
    results: cache[p]
      .filter((result) => {
        const word = q.toLowerCase();

        const matchTitle = result.meta.title.toLowerCase().includes(word);
        const matchContent = result.content.toLowerCase().includes(word);

        return matchTitle || matchContent;
      })
      .map((result) => ({
        title: result.meta.title,
        description: result.meta.description,
        link: result.url,
      })),
  });
}

export default withErrorHandler(search);

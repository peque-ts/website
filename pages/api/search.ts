import { NextApiRequest, NextApiResponse } from 'next';

import cache from '../../cache.json';
import { withErrorHandler } from '../../lib/error';
import { validateProject, validateQuery } from '../../lib/validation';
import { SearchResult } from '../../types/search-result';

interface ResponseData {
  results: SearchResult[];
}

interface CachedItem {
  title: string;
  heading: string;
  description: string;
  url: string;
}

const CONTENT_MAX_LENGTH = 120;

const truncate = (text: string): string => {
  return `${text.substr(0, CONTENT_MAX_LENGTH)}${text.length > CONTENT_MAX_LENGTH ? '...' : ''}`;
};

function search(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const { p, q } = req.query;

  validateProject(p);
  validateQuery(q);

  const results: SearchResult[] = [];

  for (const { description, url, title, heading } of cache[p] as CachedItem[]) {
    const word = q.toLowerCase();

    // @ts-ignore
    let matches = [...description.toLowerCase().matchAll(new RegExp(word, 'g'))];

    if (matches.length === 0) {
      continue;
    }

    results.push({
      title: title === heading ? title : [title, heading].join(' > '),
      description: truncate(description),
      url,
      matches: matches
        .map(({ index }) => ({
          start: index,
          length: word.length,
        }))
        .filter((match) => match.start + match.length < CONTENT_MAX_LENGTH),
    });
  }

  res.send({ results });
}

export default withErrorHandler(search);

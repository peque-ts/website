import clsx from 'clsx';
import Link from 'next/link';
import React, { useState } from 'react';

import { SearchResult } from '../../types/search-result';
import { List } from '../List';

interface Props {
  data: SearchResult[];
}

export const SearchResultsContent: React.VFC<Props> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <List items={data} className="space-y-2">
      {({ title, description, link }, index) => (
        <Link href={link}>
          <a
            data-search-result={true}
            onMouseEnter={() => setActiveIndex(index)}
            className={clsx(
              'block rounded border p-2',
              activeIndex === index
                ? 'border-secondary-600 bg-secondary-600'
                : 'border-secondary-700 bg-secondary-800',
            )}
          >
            <h1 className="text-base font-semibold text-secondary-100">{title}</h1>
            <p className="text-secondary-150">{description}</p>
          </a>
        </Link>
      )}
    </List>
  );
};

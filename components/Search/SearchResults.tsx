import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import { SearchResult } from '../../types/search-result';
import { HighlightText } from '../HighlightText';
import { List } from '../List';

interface Props {
  data: SearchResult[];
  activeIndex: number;
  onActiveIndexChange: (value: number) => void;
}

export const SearchResults: React.VFC<Props> = ({ data, onActiveIndexChange, activeIndex }) => (
  <List items={data} className="space-y-2">
    {({ title, description, url, matches }, index) => (
      <Link href={url}>
        <a
          data-search-result={true}
          onMouseEnter={() => onActiveIndexChange(index)}
          className={clsx(
            'block rounded border p-2',
            activeIndex === index
              ? 'border-secondary-600 bg-secondary-600'
              : 'border-secondary-700 bg-secondary-800',
          )}
        >
          <h1 className="text-base font-semibold text-secondary-100">{title}</h1>
          <p className="text-secondary-150">
            <HighlightText text={description} matches={matches} />
          </p>
        </a>
      </Link>
    )}
  </List>
);

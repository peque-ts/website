import React from 'react';

import { SearchResult } from '../../types/search-result';
import { SearchResultsContent } from './SearchResultsContent';

interface Props {
  data: SearchResult[];
  error: string;
  loading: boolean;
  typing: boolean;
  keyword: string;
}

export const SearchResults: React.VFC<Props> = ({ data, error, keyword }) => {
  if (error) {
    return <p className="mt-8 text-center text-danger">{error}</p>;
  }

  if (data.length === 0) {
    return (
      <p className="mt-8 text-center text-secondary-200">
        No results for &ldquo;{keyword.trim()}&rdquo;. Try again with a different keyword.
      </p>
    );
  }

  return <SearchResultsContent data={data} />;
};

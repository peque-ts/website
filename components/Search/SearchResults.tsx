import React from 'react';

import { SearchResult } from '../../types/search-result';

interface Props {
  data: SearchResult[];
  error: string;
  loading: boolean;
  typing: boolean;
}

export const SearchResults: React.VFC<Props> = ({ data, error, loading, typing }) => {
  return <p>SearchResults: {JSON.stringify(data)}</p>;
};

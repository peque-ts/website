import React from 'react';

interface SearchResult {}

interface Props {
  data: SearchResult[];
}

export const SearchResults: React.VFC<Props> = ({ data }) => {
  return <p>SearchResults: {JSON.stringify(data)}</p>;
};

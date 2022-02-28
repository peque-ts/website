import React, { useCallback, useEffect, useState } from 'react';

import { useDebounce } from '../../hooks/use-debounce';
import { Search } from './Search';
import { SearchResults } from './SearchResults';
import { SearchResult, UseSearchOptions, UseSearchResult } from './use-search.types';

const DEBOUNCE_TIME = 200 as const;

export const useSearch = ({ endpoint }: UseSearchOptions): UseSearchResult => {
  const [value, setValue] = useState('');
  const [searchValue] = useDebounce(value, DEBOUNCE_TIME);
  const [shouldRenderResults, setShouldRenderResults] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (value.trim() === '') {
      setShouldRenderResults(false);
      setError('');
      setLoading(false);
      setData([]);
    }
  }, [value]);

  useEffect(() => {
    if (searchValue.trim() === '') {
      return;
    }

    (async () => {
      try {
        setError('');
        setLoading(true);

        const response = await fetch(`${endpoint}?q=${encodeURIComponent(searchValue)}`);
        const json = await response.json();
        setData(json);
      } catch {
        setError('Unable to fetch');
        setData([]);
      } finally {
        setShouldRenderResults(true);
        setLoading(false);
      }
    })();
  }, [endpoint, searchValue]);

  const renderSearchInput = () => (
    <Search
      value={value}
      onChange={setValue}
      onFocus={() => setShouldRenderResults(value.trim() !== '')}
      onBlur={() => setShouldRenderResults(false)}
    />
  );

  const renderSearchResults = () => <SearchResults data={data} />;

  return {
    renderSearchInput,
    renderSearchResults,
    shouldRenderResults,
  };
};

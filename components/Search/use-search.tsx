import React, { useEffect, useRef, useState } from 'react';

import { useDebounce } from '../../hooks/use-debounce';
import { SearchResult } from '../../types/search-result';
import { Search } from './Search';
import { SearchResults } from './SearchResults';

interface UseSearchResult {
  renderSearchInput: () => JSX.Element;
  renderSearchResults: (() => JSX.Element) | undefined;
}

const DEBOUNCE_TIME = 200 as const;
const API_URL = '/api/search' as const;

export const useSearch = (): UseSearchResult => {
  const [value, setValue] = useState('');
  const [searchValue, typing] = useDebounce(value, DEBOUNCE_TIME);

  const showResults = useRef(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState<SearchResult[]>([]);

  useEffect(() => {
    // When input is empty, reset to the initial state.
    if (value.trim() === '') {
      showResults.current = false;
      setError('');
      setLoading(false);
      setData([]);
    }
  }, [value]);

  useEffect(() => {
    // Trigger search only when debounced search value is not empty.
    if (searchValue.trim() === '') {
      return;
    }

    (async () => {
      try {
        setLoading(true);

        const response = await fetch(`${API_URL}?q=${encodeURIComponent(searchValue)}`);
        const json = await response.json();

        setError('');
        setData(json);
      } catch (err) {
        console.log('YOYOYO ERROR', err);
        setError('Unable to fetch');
        setData([]);
      } finally {
        showResults.current = true;
        setLoading(false);
      }
    })();
  }, [searchValue]);

  const renderSearchInput = () => (
    <Search
      value={value}
      onChange={setValue}
      onFocus={() => (showResults.current = value.trim() !== '')}
      onBlur={() => (showResults.current = false)}
      typing={typing}
      loading={loading}
    />
  );

  const renderSearchResults = () => (
    <SearchResults error={error} data={data} loading={loading} typing={typing} />
  );

  return {
    renderSearchInput,
    renderSearchResults: showResults.current ? renderSearchResults : undefined,
  };
};

import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

import { useDebounce } from '../../hooks/use-debounce';
import { SearchResult } from '../../types/search-result';
import { SearchInput } from './SearchInput';
import { SearchResults } from './SearchResults';

interface UseSearchResult {
  renderSearchInput: () => JSX.Element;
  renderSearchResults: (() => JSX.Element) | undefined;
}

const DEBOUNCE_TIME = 200;
const API_URL = '/api/search';

export const useSearch = (): UseSearchResult => {
  const router = useRouter();

  const [value, setValue] = useState('');
  const [searchValue, typing] = useDebounce(value, DEBOUNCE_TIME);
  const [showResults, setShowResults] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState<SearchResult[]>([]);

  const isLinkClicked = useRef(false);

  useEffect(() => {
    const onRouteChange = () => {
      if (isLinkClicked.current) {
        setShowResults(false);
        isLinkClicked.current = false;
      }
    };

    router.events.on('routeChangeStart', onRouteChange);
    return () => router.events.off('routeChangeStart', onRouteChange);
  });

  const onInputFocus = () => {
    setShowResults(value.trim() !== '');
  };

  const onInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.relatedTarget?.getAttribute('data-search-result')) {
      isLinkClicked.current = true;
    } else {
      setShowResults(false);
    }
  };

  useEffect(() => {
    // When input is empty, reset to the initial state.
    if (value.trim() === '') {
      setShowResults(false);
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

        setData(json.results ?? []);
        setError(json.message ?? '');
      } catch {
        setData([]);
        setError('Unable to retrieve results due to a network error.');
      } finally {
        setShowResults(true);
        setLoading(false);
      }
    })();
  }, [searchValue]);

  const renderSearchInput = () => (
    <SearchInput
      value={value}
      onChange={setValue}
      onFocus={onInputFocus}
      onBlur={onInputBlur}
      typing={typing}
      loading={loading}
    />
  );

  const renderSearchResults = () => (
    <SearchResults data={data} error={error} loading={loading} typing={typing} keyword={value} />
  );

  return {
    renderSearchInput,
    renderSearchResults: showResults ? renderSearchResults : undefined,
  };
};

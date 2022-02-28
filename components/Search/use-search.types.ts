interface UseSearchOptions {
  endpoint: string;
}

interface UseSearchResult {
  renderSearchInput: () => JSX.Element;
  renderSearchResults: () => JSX.Element;
  shouldRenderResults: boolean;
}

interface SearchResult {
  title: string;
  description: string;
  link: string;
}

export type { UseSearchOptions, UseSearchResult, SearchResult };

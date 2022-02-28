import React, { useRef } from 'react';

import { Icon } from '../Icon';

const MAX_LENGTH = 50;

interface Props {
  value: string;
  onChange: (value: string) => void;
  onFocus: () => void;
  onBlur: () => void;
}

export const Search: React.VFC<Props> = ({ value, onChange, onFocus, onBlur }) => {
  const ref = useRef<HTMLInputElement | null>(null);

  return (
    <div className="flex h-10 w-full items-center space-x-2 rounded border border-secondary-700 bg-secondary-800 px-2 text-secondary-200 focus-within:bg-secondary-900 focus-within:text-secondary-100">
      <button type="button" className="flex" onClick={() => ref.current?.focus()}>
        <Icon name="Search" size={16} />
      </button>
      <input
        ref={ref}
        type="search"
        className="h-full flex-1 bg-transparent outline-none"
        placeholder="Search..."
        value={value}
        onFocus={() => onFocus()}
        onBlur={() => onBlur()}
        onChange={(event) => onChange(event.target.value)}
        maxLength={MAX_LENGTH}
      />
    </div>
  );
};

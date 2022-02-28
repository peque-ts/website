import React from 'react';

import { Icon } from '../Icon';
import { useClipboard } from './ButtonCopy.helpers';

interface Props {
  data: string;
}

export const ButtonCopy: React.VFC<Props> = ({ data }) => {
  const [copy, copied] = useClipboard();

  return (
    <button type="button" className="flex items-center" onClick={() => copy(data)}>
      {copied ? (
        <span className="text-sm">copied!</span>
      ) : (
        <>
          <span className="sr-only">Copy to clipboard</span>
          <Icon name="Copy" className="text-secondary-200 hover:text-white transition" size={16} />
        </>
      )}
    </button>
  );
};

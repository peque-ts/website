import React from 'react';

import { Icon } from '../Icon';
import { useClipboard } from './ButtonCopy.helpers';

interface Props {
  data: string;
}

export const ButtonCopy: React.VFC<Props> = ({ data }) => {
  const [copy, copied] = useClipboard();

  return (
    <button type="button" onClick={() => copy(data)}>
      {copied ? (
        <span className="text-sm">copied!</span>
      ) : (
        <Icon alt="Copy" name="copy" size={16} />
      )}
    </button>
  );
};

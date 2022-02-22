import clsx from 'clsx';
import React from 'react';

import { assertString } from '../../utils/assertions';
import { ButtonCopy } from '../ButtonCopy';

interface Props {
  className?: string;
}

export const Terminal: React.FC<Props> = ({ children, className }) => {
  assertString(children);

  return (
    <div
      className={clsx(
        'flex items-center justify-between w-full bg-black shadow-lg rounded p-4 space-x-4',
        className,
      )}
    >
      <code>$ {children}</code>
      <div className="w-12 flex items-center justify-end">
        <ButtonCopy data={children} />
      </div>
    </div>
  );
};

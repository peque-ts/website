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
        'flex w-full items-center justify-between space-x-4 rounded bg-black p-4 shadow-lg',
        className,
      )}
    >
      <code>$ {children}</code>
      <div className="flex w-12 items-center justify-end">
        <ButtonCopy data={children} />
      </div>
    </div>
  );
};

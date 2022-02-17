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
    <div className={clsx('bg-black p-4 shadow-lg rounded inline-flex space-x-4', className)}>
      <pre>
        <code>$ {children}</code>
      </pre>
      <div className="w-12 flex items-center justify-end">
        <ButtonCopy data={children} />
      </div>
    </div>
  );
};

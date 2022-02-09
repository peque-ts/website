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
    <div className={clsx('bg-primary-900 p-4 shadow-lg rounded inline-flex space-x-8', className)}>
      <pre>
        <code className="bg-primary-900">$ {children}</code>
      </pre>
      <div className="w-12 flex items-center justify-end">
        <ButtonCopy data={children} />
      </div>
    </div>
  );
};

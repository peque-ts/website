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
    <div className={clsx('bg-primary-900 p-4 drop-shadow-xl rounded', className)}>
      <div className="flex justify-between">
        <pre>
          <code className="bg-primary-900">$ {children}</code>
        </pre>
        <ButtonCopy data={children} />
      </div>
    </div>
  );
};

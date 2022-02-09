import React from 'react';

import { assertString } from '../../utils/assertions';
import { Icon } from '../Icon';

export const Terminal: React.FC = ({ children }) => {
  assertString(children);

  return (
    <div className="bg-primary-900 p-4 drop-shadow-xl rounded">
      <div className="flex justify-between">
        <pre>
          <code className="bg-primary-900">$ {children}</code>
        </pre>
        <Icon alt="Copy" name="github" size={24} />
      </div>
    </div>
  );
};

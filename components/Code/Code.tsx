import React, { useRef } from 'react';

import { useCode } from '../../hooks/use-code';
import { assertString } from '../../utils/assertions';

export const Code: React.FC = ({ children }) => {
  assertString(children);

  const ref = useRef(null);

  useCode(ref);

  return (
    <pre className="custom-scrollbar">
      <code role="code" className="drop-shadow-xl rounded" ref={ref}>
        {children.trim()}
      </code>
    </pre>
  );
};

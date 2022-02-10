import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import React, { useEffect, useRef } from 'react';

import { assertString } from '../../utils/assertions';

export const Code: React.FC = ({ children }) => {
  assertString(children);

  const ref = useRef(null);

  useEffect(() => {
    hljs.registerLanguage('typescript', typescript);

    /* istanbul ignore else */
    if (ref.current) {
      hljs.highlightElement(ref.current);
    }
  }, []);

  return (
    <pre className="custom-scrollbar">
      <code role="code" className="drop-shadow-xl rounded" ref={ref}>
        {children.trim()}
      </code>
    </pre>
  );
};

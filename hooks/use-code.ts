import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import { MutableRefObject, useEffect } from 'react';

export const useCode = (ref?: MutableRefObject<HTMLElement | null>) => {
  useEffect(() => {
    hljs.registerLanguage('typescript', typescript);

    return () => {
      hljs.unregisterLanguage('typescript');
    };
  }, []);

  useEffect(() => {
    if (ref?.current) {
      hljs.highlightElement(ref.current);
    } else {
      hljs.highlightAll();
    }
  });
};

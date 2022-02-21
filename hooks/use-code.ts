import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import typescript from 'highlight.js/lib/languages/typescript';
import { MutableRefObject, useEffect } from 'react';

const SUPPORTED_LANGUAGES = { bash, typescript };

export const useCode = (ref?: MutableRefObject<HTMLElement | null>) => {
  useEffect(() => {
    for (const [key, value] of Object.entries(SUPPORTED_LANGUAGES)) {
      hljs.registerLanguage(key, value);
    }

    return () => {
      for (const language of Object.keys(SUPPORTED_LANGUAGES)) {
        hljs.unregisterLanguage(language);
      }
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

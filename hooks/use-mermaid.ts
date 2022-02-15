import mermaid from 'mermaid';
import { useEffect, useLayoutEffect } from 'react';

export const useMermaid = () => {
  useEffect(() => {
    mermaid.initialize({ theme: 'dark' });
  }, []);

  useLayoutEffect(() => {
    mermaid.init('.mermaid');
  });
};

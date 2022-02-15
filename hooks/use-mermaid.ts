import mermaid from 'mermaid';
import { useEffect } from 'react';

export const useMermaid = () => {
  useEffect(() => {
    console.log('mermaid: initialize');
    mermaid.initialize({ theme: 'dark' });
  }, []);

  useEffect(() => {
    console.log('mermaid: init');
    mermaid.init('.mermaid');
  });
};

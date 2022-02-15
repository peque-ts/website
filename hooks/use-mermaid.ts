import mermaid from 'mermaid';
import { useEffect } from 'react';

export const useMermaid = () => {
  useEffect(() => {
    mermaid.initialize({ theme: 'dark' });
    mermaid.init('.mermaid');
  });
};

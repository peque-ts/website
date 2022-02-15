import mermaid from 'mermaid';
import { useEffect, useState } from 'react';

export const useMermaid = () => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    mermaid.initialize({ theme: 'dark' });
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      mermaid.init('.mermaid');
    }
  }, [initialized]);
};

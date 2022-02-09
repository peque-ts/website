import { useEffect, useRef, useState } from 'react';

export function useClipboard(): [(data: string) => Promise<void>, boolean] {
  const [copied, setCopied] = useState(false);

  const timeout = useRef<number>();

  useEffect(() => {
    return () => {
      window.clearTimeout(timeout.current);
    };
  }, []);

  const copy = async (data: string) => {
    if (copied) {
      return;
    }

    try {
      await navigator.clipboard.writeText(data);
      setCopied(true);

      window.clearTimeout(timeout.current);
      timeout.current = window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Unable to copy to clipboard.', error);
    }
  };

  return [copy, copied];
}

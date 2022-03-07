import React, { useMemo } from 'react';

interface Props {
  text: string;
  matches: { start: number; length: number }[];
}

interface Chunk {
  value: string;
  highlight: boolean;
}

export const HighlightText: React.VFC<Props> = ({ text, matches }) => {
  const chunks = useMemo<Chunk[]>(() => {
    const result: Chunk[] = [];

    if (matches.length === 0) {
      result.push({
        value: text,
        highlight: false,
      });
    }

    let lastPos = 0;

    for (let i = 0; i < matches.length; i++) {
      const { start, length } = matches[i];

      if (lastPos < start) {
        result.push({
          value: text.substr(lastPos, start - lastPos),
          highlight: false,
        });
      }

      result.push({
        value: text.substr(start, length),
        highlight: true,
      });

      lastPos = start + length;

      if (lastPos < text.length && i === matches.length - 1) {
        result.push({
          value: text.substr(start + length),
          highlight: false,
        });
      }
    }

    return result;
  }, [matches, text]);

  return (
    <>
      {chunks.map(({ value, highlight }, index) => (
        <span key={index} className={highlight ? 'bg-primary-500' : ''}>
          {value}
        </span>
      ))}
    </>
  );
};

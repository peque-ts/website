import React from 'react';

import { useCode } from '../../hooks/use-code';
import { useMermaid } from '../../hooks/use-mermaid';

interface Props {
  html: string;
}

export const Renderer: React.VFC<Props> = ({ html }) => {
  useCode();
  useMermaid();

  return <div className="renderer" dangerouslySetInnerHTML={{ __html: html }} />;
};

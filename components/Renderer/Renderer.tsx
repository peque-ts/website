import React from 'react';

import { useCode } from '../../hooks/use-code';

interface Props {
  html: string;
}

export const Renderer: React.VFC<Props> = ({ html }) => {
  useCode();

  return <article className="renderer" dangerouslySetInnerHTML={{ __html: html }} />;
};

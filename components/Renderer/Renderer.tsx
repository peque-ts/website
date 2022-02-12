import React from 'react';

import { useCode } from '../../hooks/use-code';

interface Props {
  html: string;
}

export const Renderer: React.VFC<Props> = ({ html }) => {
  useCode();

  return <div className="renderer" dangerouslySetInnerHTML={{ __html: html }} />;
};

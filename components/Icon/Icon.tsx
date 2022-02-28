import React from 'react';

import { SvgCollection } from './svg';

interface Props {
  name: string;
  size: number;
  className?: string;
}

export const Icon: React.VFC<Props> = ({ name, size, className }) => {
  const Svg = SvgCollection[name];

  return <Svg size={size} className={className} />;
};

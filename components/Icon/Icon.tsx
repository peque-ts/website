import Image from 'next/image';
import React from 'react';

interface Props {
  alt: string;
  name: string;
  size: number;
  className?: string;
}

export const Icon: React.VFC<Props> = ({ name, size, className, alt }) => (
  <Image src={`/icons/${name}.svg`} alt={alt} width={size} height={size} className={className} />
);

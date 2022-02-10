import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  alt: string;
  name: string;
  size: number;
  className?: string;
  link?: string;
}

export const Icon: React.VFC<Props> = ({ name, size, className, alt, link }) => {
  const renderIcon = () => (
    <Image src={`/icons/${name}.svg`} alt={alt} width={size} height={size} className={className} />
  );

  if (!link) {
    return renderIcon();
  }

  return (
    <Link href={link}>
      <a className="flex">{renderIcon()}</a>
    </Link>
  );
};

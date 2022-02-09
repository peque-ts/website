import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

interface Props {
  to: string;
}

export const ButtonLink: React.FC<Props> = ({ children, to }) => (
  <Link href={to}>
    <a
      className={clsx(
        'inline-block text-sm font-semibold rounded py-3 px-8',
        'transition bg-primary-500 shadow-lg shadow-[#E712B433] hover:shadow-[#E712B455] hover:bg-primary-400',
      )}
    >
      {children}
    </a>
  </Link>
);

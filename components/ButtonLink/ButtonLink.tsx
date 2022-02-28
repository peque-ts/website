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
        'inline-block rounded py-3 px-8 text-sm font-semibold',
        'bg-primary-500 shadow-lg shadow-[#E712B433] transition hover:bg-primary-400 hover:shadow-[#E712B455]',
      )}
    >
      {children}
    </a>
  </Link>
);

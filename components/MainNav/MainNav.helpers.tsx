import clsx from 'clsx';
import React, { useCallback, useState } from 'react';

import { NavItem } from '../../lib/nav.types';

export const MAIN_NAV_ITEMS: Pick<NavItem, 'name' | 'to'>[] = [
  {
    name: 'Docs',
    to: '/docs',
  },
  {
    name: 'Enterprise',
    to: '/enterprise',
  },
  {
    name: 'Sponsors',
    to: '/sponsors',
  },
];

export const useNavMobileButton = () => {
  const [open, setOpen] = useState(false);

  const renderButton = useCallback(() => {
    const renderSegment = (className: string) => (
      <span
        aria-hidden="true"
        className={clsx(
          'absolute block h-0.5 w-5 transform bg-white transition ease-in-out',
          className,
        )}
      />
    );

    return (
      <button
        type="button"
        className="relative h-10 w-10 focus:outline-none"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">Open main menu</span>
        <div className="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/2 transform">
          {renderSegment(open ? 'rotate-45' : '-translate-y-1.5')}
          {renderSegment(open ? 'opacity-0' : '')}
          {renderSegment(open ? '-rotate-45' : 'translate-y-1.5')}
        </div>
      </button>
    );
  }, [open]);

  return { renderButton, open };
};

import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import { NAV_ITEMS, useNavMobileButton } from './Nav.helpers';

interface NavMobileProps {
  bgClassName?: string;
}

const NavMobile: React.VFC<NavMobileProps> = ({ bgClassName }) => {
  const { open, renderButton } = useNavMobileButton();

  return (
    <div className="tablet:hidden block">
      {renderButton()}
      <div
        className={clsx(
          'absolute inset-x-0 -z-10 shadow-lg transition',
          bgClassName,
          open ? 'translate-y-0' : '-translate-y-full',
        )}
      >
        {open && (
          <ul className="flex flex-col space-y-4 items-center pt-4 pb-8">
            {NAV_ITEMS.map(({ name, to }, index) => (
              <li key={index}>
                <Link href={to}>
                  <a className="text-lg">{name}</a>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const NavDesktop: React.VFC = () => (
  <ul className="hidden tablet:flex space-x-8">
    {NAV_ITEMS.map(({ name, to }, index) => (
      <li key={index}>
        <Link href={to}>
          <a className="text-lg">{name}</a>
        </Link>
      </li>
    ))}
  </ul>
);

export { NavMobile, NavDesktop };

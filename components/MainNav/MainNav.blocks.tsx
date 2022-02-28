import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import { MAIN_NAV_ITEMS, useNavMobileButton } from './MainNav.helpers';

const MainNavItems: React.VFC = () => (
  <>
    {MAIN_NAV_ITEMS.map(({ name, to }, index) => (
      <li key={index}>
        <Link href={to}>
          <a className="text-lg">{name}</a>
        </Link>
      </li>
    ))}
  </>
);

const MainNavMobile: React.VFC<{ bgClassName?: string }> = (props) => {
  const { open, renderButton } = useNavMobileButton();

  return (
    <div className="block tablet:hidden" data-testid="MainNavMobile">
      {renderButton()}
      <div
        className={clsx(
          'absolute inset-x-0 -z-10 shadow-lg transition',
          props.bgClassName,
          open ? 'translate-y-0' : '-translate-y-full',
        )}
      >
        <ul className={clsx('flex-col items-center space-y-4 pt-4 pb-8', open ? 'flex' : 'hidden')}>
          <MainNavItems />
        </ul>
      </div>
    </div>
  );
};

const MainNavDesktop: React.VFC = () => (
  <ul className="hidden space-x-8 tablet:flex" data-testid="MainNavDesktop">
    <MainNavItems />
  </ul>
);

export { MainNavMobile, MainNavDesktop };

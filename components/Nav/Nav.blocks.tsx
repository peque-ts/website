import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import { NAV_ITEMS, useNavMobileButton } from './Nav.helpers';

const NavItems: React.VFC = () => (
  <>
    {NAV_ITEMS.map(({ name, to }, index) => (
      <li key={index}>
        <Link href={to}>
          <a className="text-lg">{name}</a>
        </Link>
      </li>
    ))}
  </>
);

const NavMobile: React.VFC<{ bgClassName?: string }> = (props) => {
  const { open, renderButton } = useNavMobileButton();

  return (
    <div className="tablet:hidden block" data-testid="NavMobile">
      {renderButton()}
      <div
        className={clsx(
          'absolute inset-x-0 -z-10 shadow-lg transition',
          props.bgClassName,
          open ? 'translate-y-0' : '-translate-y-full',
        )}
      >
        <ul className={clsx('flex-col space-y-4 items-center pt-4 pb-8', open ? 'flex' : 'hidden')}>
          <NavItems />
        </ul>
      </div>
    </div>
  );
};

const NavDesktop: React.VFC = () => (
  <ul className="hidden tablet:flex space-x-8" data-testid="NavDesktop">
    <NavItems />
  </ul>
);

export { NavMobile, NavDesktop };

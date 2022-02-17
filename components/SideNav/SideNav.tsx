import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import { SideNavItem } from '../../lib/nav';

interface Props {
  items: SideNavItem[];
}

export const SideNav: React.VFC<Props> = ({ items }) => (
  <nav className="fixed">
    <ul>
      {items.map(({ to, name, active }, index) => (
        <li key={index}>
          <Link href={to}>
            <a
              className={clsx('py-2 flex text-secondary-200 hover:text-white transition', {
                'font-semibold text-white': active,
              })}
            >
              {name}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

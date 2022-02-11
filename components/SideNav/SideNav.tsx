import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { SideNavItem } from '../../lib/nav';

interface Props {
  items: SideNavItem[];
}

export const SideNav: React.VFC<Props> = ({ items }) => {
  const router = useRouter();

  return (
    <aside>
      <nav>
        <ul>
          {items.map(({ to, name, active }, index) => (
            <li key={index}>
              <Link href={`${router.basePath}${to}`}>
                <a className={clsx({ active })}>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

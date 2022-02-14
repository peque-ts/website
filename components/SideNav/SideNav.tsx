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
    <nav className="fixed">
      <ul>
        {items.map(({ to, name, active }, index) => (
          <li key={index} className={clsx('py-2 px-4', { 'bg-secondary-300 rounded': active })}>
            <div className="flex items-center">
              <Link href={`${router.basePath}${to}`}>
                <a
                  className={clsx(
                    active
                      ? 'font-semibold text-primary-700'
                      : 'hover:text-white text-secondary-300',
                  )}
                >
                  {name}
                </a>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

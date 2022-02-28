import clsx from 'clsx';
import Link from 'next/link';
import React, { useState } from 'react';

import { NavItem } from '../../lib/nav.types';
import { Icon } from '../Icon';

const NavItemContent: React.VFC<{ item: NavItem }> = ({ item: { to, name, active } }) => (
  <Link href={to}>
    <a
      className={clsx('flex py-2 text-secondary-200 transition hover:text-white', {
        'font-semibold text-white': active,
      })}
    >
      {name}
    </a>
  </Link>
);

const SubNav: React.VFC<{ item: NavItem; parentIndex: number }> = ({
  parentIndex,
  item: { name, active, children },
}) => {
  const [open, setOpen] = useState<boolean>(active);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={clsx(
          'flex items-center space-x-2 py-2 text-secondary-200 transition hover:text-white',
          {
            'text-white': open,
            'font-semibold': active,
          },
        )}
      >
        <span className={clsx('flex transition ease-in-out', open ? '-rotate-90' : '-rotate-180')}>
          <Icon name="ArrowLeft" size={8} />
        </span>
        <span>{name}</span>
      </button>
      {open && (
        <ul className="pl-4">
          {children.map((item, index) => (
            <li key={`${parentIndex}.${index}`}>
              <NavItemContent item={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const NavItems: React.VFC<{ items: NavItem[] }> = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>
        {item.children.length > 0 ? (
          <SubNav item={item} parentIndex={index} />
        ) : (
          <NavItemContent item={item} />
        )}
      </li>
    ))}
  </ul>
);

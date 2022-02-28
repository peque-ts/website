import clsx from 'clsx';
import Link from 'next/link';
import React, { useState } from 'react';

import { NavItem } from '../../lib/nav.types';
import { Icon } from '../Icon';

const NavItemContent: React.VFC<{ item: NavItem }> = ({ item: { to, name, active } }) => (
  <Link href={to}>
    <a
      className={clsx('py-2 flex text-secondary-200 hover:text-white transition', {
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
          'py-2 flex items-center space-x-2 text-secondary-200 hover:text-white transition',
          {
            'text-white': open,
            'font-semibold': active,
          },
        )}
      >
        <span className={clsx('transition ease-in-out flex', open ? '-rotate-90' : '-rotate-180')}>
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

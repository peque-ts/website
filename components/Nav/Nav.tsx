import clsx from 'clsx';
import React, { useState } from 'react';

import { NavItem } from '../../lib/nav.types';
import { Icon } from '../Icon';
import { NavItems } from './Nav.blocks';

interface Props {
  items: NavItem[];
}

export const Nav: React.VFC<Props> = ({ items }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="flex justify-center laptop:hidden">
        <button
          type="button"
          className="flex items-center space-x-2 px-8"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="text-sm font-semibold">Menu</span>
          <span className={clsx('transition ease-in-out', open ? 'rotate-90' : '-rotate-90')}>
            <Icon alt="Menu" name="arrow-left" size={12} />
          </span>
        </button>
      </div>
      <div className={clsx('laptop:block', { hidden: !open })}>
        <NavItems items={items} />
      </div>
    </nav>
  );
};

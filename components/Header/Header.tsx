import clsx from 'clsx';
import React from 'react';

import { Icon } from '../Icon';
import { Nav } from './Header.blocks';

interface Props {
  text?: string;
  transparent?: boolean;
}

export const Header: React.VFC<Props> = ({ text, transparent }) => (
  <header
    className={clsx(
      'z-10 opacity-90 h-16 w-full top-0 fixed',
      transparent ? 'bg-primary-700' : 'bg-primary-600',
    )}
  >
    <div className="container h-full mx-auto px-2 flex items-center justify-between">
      <div className="flex items-center">
        <Icon alt="Logo" name="logo" size={40} link="/" />
        <h4>{text}</h4>
      </div>
      <div className="flex items-center space-x-8">
        <Nav />
        <Icon alt="Peque on GitHub" name="github" size={30} link="https://github.com/peque-ts" />
      </div>
    </div>
  </header>
);

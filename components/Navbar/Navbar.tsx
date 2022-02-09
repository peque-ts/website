import React from 'react';

import { Icon } from '../Icon';
import { Nav } from './Navbar.blocks';

export const Navbar: React.VFC = () => (
  <div className="h-16 bg-primary-600">
    <div className="container h-full mx-auto px-2 flex items-center justify-between">
      <Icon alt="Logo" name="logo" size={40} link="/" />
      <div className="flex items-center space-x-8">
        <Nav />
        <Icon alt="Peque on GitHub" name="github" size={30} link="https://github.com/peque-ts" />
      </div>
    </div>
  </div>
);

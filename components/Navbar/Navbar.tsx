import React from 'react';

import { IconLink, Nav } from './Navbar.blocks';

export const Navbar: React.VFC = () => (
  <div className="h-16">
    <div className="container h-full mx-auto px-2 flex items-center justify-between">
      <IconLink icon="/logo.svg" link="/" alt="Logo" />
      <div className="flex items-center space-x-8">
        <Nav />
        <IconLink icon="/github.svg" link="https://github.com/peque-ts" alt="Peque on GitHub" />
      </div>
    </div>
  </div>
);

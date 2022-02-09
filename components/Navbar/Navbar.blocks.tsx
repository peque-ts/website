import Link from 'next/link';
import React from 'react';

import { NAV_ITEMS } from './Navbar.helpers';

export const Nav: React.VFC = () => (
  <nav>
    <ul className="flex space-x-8">
      {NAV_ITEMS.map(({ name, link }, index) => (
        <li key={index}>
          <Link href={link}>
            <a className="text-lg">{name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

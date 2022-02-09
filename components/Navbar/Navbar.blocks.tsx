import Link from 'next/link';
import React from 'react';

import { Icon } from '../Icon';
import { NAV_ITEMS } from './Navbar.helpers';

interface IconLinkProps {
  icon: string;
  link: string;
  alt: string;
  small?: boolean;
}

const IconLink: React.VFC<IconLinkProps> = ({ link, icon, alt, small }) => {
  const size = small ? 30 : 40;

  return (
    <Link href={link}>
      <a>
        <Icon alt={alt} name={icon} size={size} />
      </a>
    </Link>
  );
};

const Nav: React.VFC = () => (
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

export { IconLink, Nav };

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { NAV_ITEMS } from './Navbar.helpers';

interface IconLinkProps {
  icon: string;
  link: string;
  alt: string;
}

const IconLink: React.VFC<IconLinkProps> = ({ link, icon, alt }) => (
  <Link href={link}>
    <a>
      <Image src={icon} alt={alt} width={40} height={40} />
    </a>
  </Link>
);

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

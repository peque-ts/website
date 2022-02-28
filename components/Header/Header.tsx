import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import { Container } from '../Container';
import { Icon } from '../Icon';
import { MainNav } from '../MainNav';

interface Props {
  text?: string;
  bgClassName?: string;
}

export const Header: React.VFC<Props> = ({ text, bgClassName }) => (
  <header className={clsx('fixed top-0 z-10 h-16 w-full', bgClassName)}>
    <Container className="flex h-full items-center justify-between">
      <div className="flex items-center">
        <Link href="/">
          <a className="flex">
            <Icon name="Logo" size={40} />
          </a>
        </Link>
        <h4>{text}</h4>
      </div>
      <div className="flex items-center space-x-8">
        <MainNav bgClassName={bgClassName} />
        <Link href="https://github.com/pequehq">
          <a className="flex">
            <Icon name="GitHub" size={24} />
          </a>
        </Link>
      </div>
    </Container>
  </header>
);

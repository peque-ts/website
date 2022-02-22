import clsx from 'clsx';
import React from 'react';

import { Container } from '../Container';
import { Icon } from '../Icon';
import { Nav } from '../Nav';

interface Props {
  text?: string;
  bgClassName?: string;
}

export const Header: React.VFC<Props> = ({ text, bgClassName }) => (
  <header className={clsx('z-10 h-16 w-full top-0 fixed', bgClassName)}>
    <Container className="h-full flex items-center justify-between">
      <div className="flex items-center">
        <Icon alt="Logo" name="logo" size={40} link="/" />
        <h4>{text}</h4>
      </div>
      <div className="flex items-center space-x-8">
        <Nav bgClassName={bgClassName} />
        <Icon alt="Peque on GitHub" name="github" size={24} link="https://github.com/pequehq" />
      </div>
    </Container>
  </header>
);

import React from 'react';

import { NavDesktop, NavMobile } from './Nav.blocks';

interface Props {
  bgClassName?: string;
}

export const Nav: React.VFC<Props> = ({ bgClassName }) => (
  <nav>
    <NavMobile bgClassName={bgClassName} />
    <NavDesktop />
  </nav>
);

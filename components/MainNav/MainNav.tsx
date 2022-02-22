import React from 'react';

import { MainNavDesktop, MainNavMobile } from './MainNav.blocks';

interface Props {
  bgClassName?: string;
}

export const MainNav: React.VFC<Props> = ({ bgClassName }) => (
  <nav>
    <MainNavMobile bgClassName={bgClassName} />
    <MainNavDesktop />
  </nav>
);

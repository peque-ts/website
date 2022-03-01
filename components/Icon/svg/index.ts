import React from 'react';

import { SvgProps } from '../Icon.types';
import { ArrowLeft } from './ArrowLeft';
import { Check } from './Check';
import { Copy } from './Copy';
import { DashCircle } from './DashCircle';
import { GitHub } from './GitHub';
import { Logo } from './Logo';
import { Search } from './Search';

export const SvgCollection: Record<string, React.VFC<SvgProps>> = {
  ArrowLeft,
  Check,
  Copy,
  GitHub,
  Logo,
  Search,
  DashCircle,
};

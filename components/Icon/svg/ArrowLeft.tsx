import React from 'react';

import { SvgProps } from '../Icon.types';

export const ArrowLeft: React.VFC<SvgProps> = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    className={className}
    width={size}
    height={size}
  >
    <path
      d="M10.15.5 4 6.65a.48.48 0 0 0 0 .7l6.15 6.15"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="rotate(.045) scale(4.57143)"
    />
  </svg>
);

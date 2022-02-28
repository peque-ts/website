import React from 'react';

import { SvgProps } from '../Icon.types';

export const Check: React.VFC<SvgProps> = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width={size}
    height={size}
    className={className}
  >
    <g transform="rotate(.045) scale(4.57143)">
      <path
        d="m4 8 2.05 1.64a.48.48 0 0 0 .4.1.5.5 0 0 0 .34-.24L10 4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="7"
        cy="7"
        r="6.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

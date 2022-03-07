import React from 'react';

import { SvgProps } from '../Icon.types';

export const Search: React.VFC<SvgProps> = ({ className, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width={size}
    height={size}
    className={className}
  >
    <g transform="rotate(.045) scale(4.57143)">
      <circle
        cx="5.92"
        cy="5.92"
        r="5.42"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeLinecap="round"
        d="M13.5 13.5 9.75 9.75"
      />
    </g>
  </svg>
);

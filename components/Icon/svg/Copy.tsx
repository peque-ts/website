import React from 'react';

import { SvgProps } from '../Icon.types';

export const Copy: React.VFC<SvgProps> = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width={size}
    height={size}
    className={className}
  >
    <g transform="rotate(.045) scale(4.57143)">
      <rect
        x=".5"
        y=".5"
        width="10.5"
        height="10.5"
        rx="1"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 3.5v9a1 1 0 0 1-1 1h-9"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

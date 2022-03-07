import React from 'react';

import { SvgProps } from '../Icon.types';

export const DashCircle: React.VFC<SvgProps> = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
  >
    <circle cx="12" cy="12" r="10" className="opacity-25" stroke="currentColor" strokeWidth="2" />
    <circle
      cx="12"
      cy="12"
      r="10"
      className="opacity-75"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="15"
    />
  </svg>
);

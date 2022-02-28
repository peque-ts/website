import React from 'react';

import { SvgProps } from '../Icon.types';

export const Logo: React.VFC<SvgProps> = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="555.15 252.65 489.2 694.2"
    enableBackground="new 0 0 1600 1200"
    width={size}
    height={size}
    className={className}
  >
    <linearGradient
      id="a"
      x1="899.161"
      x2="404.239"
      y1="468.41"
      y2="124.813"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#ff63da" />
      <stop offset=".304" stopColor="#835aff" />
      <stop offset=".645" stopColor="#468ffd" />
      <stop offset="1" stopColor="#02caf2" />
    </linearGradient>
    <path
      fill="url(#a)"
      d="m1031.43 399.57-115.72 66.8-115.73 66.81-115.69-66.81-115.72-66.8 115.72-66.81 115.69-66.8z"
    />
    <linearGradient
      id="b"
      x1="1009.309"
      x2="505.486"
      y1="466.337"
      y2="948.797"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#02caf2" />
      <stop offset=".355" stopColor="#468ffd" />
      <stop offset=".696" stopColor="#835aff" />
      <stop offset="1" stopColor="#ff63da" />
    </linearGradient>
    <path
      fill="url(#b)"
      d="M1031.42 399.56v267.21l-115.71 66.84-347.14 200.43V666.77l115.71-66.78z"
    />
  </svg>
);

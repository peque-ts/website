import React from 'react';

interface AnchorProps {
  to: string;
}

export const Anchor: React.FC<AnchorProps> = ({ to, children }) => (
  <a
    className="text-lg text-secondary-500 transition duration-300 hover:text-white"
    href={`#${to}`}
  >
    {children}
  </a>
);

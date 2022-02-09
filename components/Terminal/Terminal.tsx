import React from 'react';

export const Terminal: React.FC = ({ children }) => {
  return <p>$ {children}</p>;
};

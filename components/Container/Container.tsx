import clsx from 'clsx';
import React from 'react';

interface Props {
  className?: string;
}

export const Container: React.FC<Props> = ({ children, className }) => (
  <div className={clsx('container mx-auto px-4', className)}>{children}</div>
);

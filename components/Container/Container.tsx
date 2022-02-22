import clsx from 'clsx';
import React from 'react';

interface Props {
  className?: string;
  section?: boolean;
}

export const Container: React.FC<Props> = (props) => {
  const className = clsx('container mx-auto px-4', props.className);

  return props.section ? (
    <section className={className}>{props.children}</section>
  ) : (
    <div className={className}>{props.children}</div>
  );
};

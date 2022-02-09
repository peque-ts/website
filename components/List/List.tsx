import React from 'react';

interface Props<TItem> {
  items: TItem[];
  children: (item: TItem, index: number) => JSX.Element;
  className?: string;
}

export function List<TItem>({ items, children, className }: Props<TItem>) {
  return (
    <ul className={className}>
      {items.map((item, index) => (
        <li key={index}>{children(item, index)}</li>
      ))}
    </ul>
  );
}

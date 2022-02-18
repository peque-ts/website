import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import { PrevNextNavItems } from '../../lib/nav.types';
import { Icon } from '../Icon';

interface Props {
  items: PrevNextNavItems;
}

export const PrevNext: React.VFC<Props> = ({ items }) => {
  const renderButton = (type: 'prev' | 'next') => {
    const item = items[type];

    return (
      <div>
        {!!item && (
          <Link href={item.to}>
            <a
              className={clsx(
                'flex items-center font-semibold justify-between rounded w-80 p-4 transition bg-secondary-700 hover:bg-secondary-800',
                type === 'next' ? 'flex-row-reverse' : 'flex-row',
              )}
            >
              <div className={clsx('flex', type === 'next' ? 'rotate-180 ml-4' : 'mr-4')}>
                <Icon alt={`Go to ${item.name}`} name="arrow" size={24} />
              </div>
              <div
                className={clsx(
                  'flex flex-col space-y-1',
                  type === 'next' ? 'items-start' : 'items-end',
                )}
              >
                <span className="text-sm text-secondary-200">
                  {type === 'prev' ? 'Prev' : 'Next'}
                </span>
                <span className="text-base text-white">{item.name}</span>
              </div>
            </a>
          </Link>
        )}
      </div>
    );
  };

  return (
    <div className="flex items-center justify-between mt-4">
      {renderButton('prev')}
      {renderButton('next')}
    </div>
  );
};

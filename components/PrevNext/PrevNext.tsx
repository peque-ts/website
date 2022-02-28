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
      <div className={clsx('w-full desktop:w-80', { 'hidden laptop:block': type === 'prev' })}>
        {!!item && (
          <Link href={item.to}>
            <a
              className={clsx(
                'flex items-center justify-between rounded bg-secondary-700 p-4 font-semibold transition hover:bg-secondary-800',
                {
                  'flex-row text-right': type === 'prev',
                  'flex-row-reverse': type === 'next',
                },
              )}
            >
              <div
                className={clsx(
                  'flex text-secondary-200',
                  type === 'next' ? 'ml-4 rotate-180' : 'mr-4',
                )}
              >
                <Icon name="ArrowLeft" size={24} />
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
    <div className="mt-4 flex laptop:justify-between laptop:space-x-4 desktop:space-x-0">
      {renderButton('prev')}
      {renderButton('next')}
    </div>
  );
};

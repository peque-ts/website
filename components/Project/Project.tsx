import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import { Button } from '../Button';
import { Code } from '../Code';
import { Icon } from '../Icon';
import { List } from '../List';
import { Terminal } from '../Terminal';

interface Props {
  name: string;
  description: string;
  features: string[];
  docsLink: string;
  command: string;
  exampleCodePosition?: 'left' | 'right';
  exampleCode: string;
  bgClassName?: string;
  className?: string;
}

export const Project: React.VFC<Props> = ({
  name,
  description,
  features,
  docsLink,
  command,
  exampleCodePosition = 'right',
  exampleCode,
  bgClassName,
  className,
}) => {
  const renderContent = () => (
    <>
      <h1>{name}</h1>
      <h2 className="text-lg font-normal mb-6">{description}</h2>
      <List className="space-y-2" items={features}>
        {(feature) => (
          <div className="flex items-center space-x-2">
            <Icon alt={feature} name="check" size={20} />
            <span>{feature}</span>
          </div>
        )}
      </List>
      <Terminal className="my-8">{command}</Terminal>
      <Button>Check the docs</Button>
    </>
  );

  return (
    <section className={clsx('relative py-8 my-8', className)}>
      <div className={clsx('-z-10 absolute inset-0', bgClassName)} />
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-8">
          {exampleCodePosition === 'right' ? (
            <>
              <div>{renderContent()}</div>
              <Code>{exampleCode}</Code>
            </>
          ) : (
            <>
              <Code>{exampleCode}</Code>
              <div>{renderContent()}</div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

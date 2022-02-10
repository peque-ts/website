import clsx from 'clsx';
import React from 'react';

import { ButtonLink } from '../ButtonLink';
import { Icon } from '../Icon';
import { List } from '../List';
import { Terminal } from '../Terminal';

interface Props {
  name: string;
  description: string;
  features: string[];
  docsLink: string;
  command: string;
  examplePosition: 'left' | 'right';
  renderExample: () => JSX.Element;
  bgClassName?: string;
}

export const Project: React.VFC<Props> = ({
  name,
  description,
  features,
  docsLink,
  command,
  examplePosition,
  renderExample,
  bgClassName,
}) => {
  const renderContent = () => (
    <div className="flex flex-col justify-center">
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
      <div>
        <Terminal className="my-8">{command}</Terminal>
      </div>
      <div>
        <ButtonLink to={docsLink}>Check the docs</ButtonLink>
      </div>
    </div>
  );

  return (
    <section className="relative py-8 my-8">
      <div className={clsx('-z-10 absolute inset-0', bgClassName)} />
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-36">
          {examplePosition === 'right' ? (
            <>
              {renderContent()}
              {renderExample()}
            </>
          ) : (
            <>
              {renderExample()}
              {renderContent()}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

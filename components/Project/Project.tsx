import clsx from 'clsx';
import React from 'react';

import { ButtonLink } from '../ButtonLink';
import { Container } from '../Container';
import { Icon } from '../Icon';
import { List } from '../List';
import { Terminal } from '../Terminal';

interface Props {
  name: string;
  description: string;
  features: string[];
  docsLink: string;
  command: string;
  renderExample: () => JSX.Element;
  bgClassName?: string;
}

export const Project: React.VFC<Props> = ({
  name,
  description,
  features,
  docsLink,
  command,
  renderExample,
  bgClassName,
}) => {
  const renderContent = () => (
    <div>
      <h1>{name}</h1>
      <h2 className="mb-6 text-lg font-normal text-secondary-100">{description}</h2>
      <List className="mb-8 space-y-1.5" items={features}>
        {(feature) => (
          <div className="flex items-center space-x-2 text-secondary-100">
            <Icon name="Check" size={20} />
            <span>{feature}</span>
          </div>
        )}
      </List>
      <div className="mb-10">
        <Terminal
          className={
            /* istanbul ignore next */ !!bgClassName
              ? 'shadow-secondary-700'
              : 'shadow-secondary-800'
          }
        >
          {command}
        </Terminal>
      </div>
      <div>
        <ButtonLink to={docsLink}>Check the docs</ButtonLink>
      </div>
    </div>
  );

  return (
    <section className="group relative my-8 py-8">
      <div className={clsx('absolute inset-0 -z-10', bgClassName)} />
      <Container>
        <div className="flex flex-col space-y-12 desktop:flex-row desktop:items-center desktop:justify-around desktop:space-y-0 desktop:group-odd:flex-row-reverse">
          {renderContent()}
          {renderExample()}
        </div>
      </Container>
    </section>
  );
};

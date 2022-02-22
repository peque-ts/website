import clsx from 'clsx';
import React from 'react';

import { styleUtils } from '../../lib/style.utils';
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
      <h2 className="text-lg font-normal mb-6 text-secondary-100">{description}</h2>
      <List className="space-y-1.5 mb-8" items={features}>
        {(feature) => (
          <div className="flex items-center space-x-2">
            <Icon alt={feature} name="check" size={20} />
            <span className="text-secondary-100">{feature}</span>
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
    <section className="relative py-8 my-8 group">
      <div className={clsx('-z-10 absolute inset-0', bgClassName)} />
      <Container>
        <div
          className={clsx(
            'flex flex-col space-y-12',
            styleUtils.twGroup(
              'desktop',
              'flex-row group-odd:flex-row-reverse items-center justify-around space-y-0',
            ),
          )}
        >
          {renderContent()}
          {renderExample()}
        </div>
      </Container>
    </section>
  );
};

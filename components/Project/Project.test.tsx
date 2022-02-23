import { render, screen } from '@testing-library/react';

import { Code } from '../Code';
import { Project } from './Project';
import { SNIPPET_FRAMEWORK } from './Project.helpers';

describe('Project', () => {
  it.each(['left', 'right'])('should render with example to the %s', (examplePosition) => {
    const { asFragment } = render(
      <Project
        name="Framework"
        description="Node.js framework for backend applications."
        features={['Modular', 'Setup REST endpoints in no time', 'Microservices']}
        docsLink="/docs/framework"
        command="npx peque new project-name"
        renderExample={() => <Code>{SNIPPET_FRAMEWORK}</Code>}
        bgClassName="bg-primary-800 skew-y-2"
      />,
    );

    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('Framework');
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent(
      'Node.js framework for backend applications.',
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
    expect(screen.getByRole('code')).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});

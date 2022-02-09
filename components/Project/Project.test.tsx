import { render } from '@testing-library/react';

import { Code } from '../Code';
import { Project } from './Project';
import { SNIPPET_FRAMEWORK } from './Project.helpers';

describe('Project', () => {
  it('should render', () => {
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

    expect(asFragment()).toMatchSnapshot();
  });
});

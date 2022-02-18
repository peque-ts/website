import { render } from '@testing-library/react';

import { EditOnGitHub } from './EditOnGitHub';

describe('EditOnGitHub', () => {
  it('should render', () => {
    const { asFragment } = render(
      <EditOnGitHub link="https://github.com/pequehq/website/blob/main/docs/framework/architecture.md" />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

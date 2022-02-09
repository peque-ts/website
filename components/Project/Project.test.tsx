import { render } from '@testing-library/react';

import { Project } from './Project';

describe('Project', () => {
  it('should render', () => {
    const { asFragment } = render(<Project />);

    expect(asFragment()).toMatchSnapshot();
  });
});

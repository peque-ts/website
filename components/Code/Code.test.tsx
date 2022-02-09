import { render } from '@testing-library/react';

import { Code } from './Code';

describe('Code', () => {
  it('should render', () => {
    const { asFragment } = render(<Code />);

    expect(asFragment()).toMatchSnapshot();
  });
});

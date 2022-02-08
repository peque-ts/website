import { render } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  it('should render', () => {
    const { asFragment } = render(<Button />);

    expect(asFragment()).toMatchSnapshot();
  });
});

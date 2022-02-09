import { render } from '@testing-library/react';

import { ButtonCopy } from './ButtonCopy';

describe('ButtonCopy', () => {
  it('should render', () => {
    const { asFragment } = render(<ButtonCopy />);

    expect(asFragment()).toMatchSnapshot();
  });
});

import { render } from '@testing-library/react';

import { Icon } from './Icon';

describe('Icon', () => {
  it('should render', () => {
    const { asFragment } = render(<Icon alt="GitHub" size={32} name="github" />);

    expect(asFragment()).toMatchSnapshot();
  });
});

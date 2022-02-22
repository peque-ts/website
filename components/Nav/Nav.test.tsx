import { render } from '@testing-library/react';

import { Nav } from './Nav';

describe('Nav', () => {
  it('should render', () => {
    const { asFragment } = render(<Nav />);

    expect(asFragment()).toMatchSnapshot();
  });
});

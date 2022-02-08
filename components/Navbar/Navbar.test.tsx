import { render } from '@testing-library/react';

import { Navbar } from './Navbar';

describe('Navbar', () => {
  it('should render', () => {
    const { asFragment } = render(<Navbar />);

    expect(asFragment()).toMatchSnapshot();
  });
});

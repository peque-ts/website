import { render, screen } from '@testing-library/react';

import { Navbar } from './Navbar';

describe('Navbar', () => {
  it('should render', () => {
    const { asFragment } = render(<Navbar />);

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});

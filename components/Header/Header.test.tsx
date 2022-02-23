import { render, screen } from '@testing-library/react';

import { Header } from './Header';

describe('Header', () => {
  it('should render', () => {
    const { asFragment } = render(<Header />);

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});

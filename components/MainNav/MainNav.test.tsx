import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { MainNav } from './MainNav';

describe('MainNav', () => {
  it('should render', () => {
    const { asFragment } = render(<MainNav />);

    expect(screen.getByTestId('MainNavDesktop')).toBeInTheDocument();
    expect(screen.getByTestId('MainNavMobile')).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  it('should toggle mobile navigation', () => {
    const { asFragment } = render(<MainNav />);

    expect(screen.getByTestId('MainNavMobile')).toBeInTheDocument();

    // assert hidden by default
    expect(within(screen.getByTestId('MainNavMobile')).getByRole('list')).toHaveClass('hidden');

    // expand menu
    userEvent.click(screen.getByRole('button'));

    // assert no longer hidden
    expect(within(screen.getByTestId('MainNavMobile')).getByRole('list')).not.toHaveClass('hidden');
    expect(asFragment()).toMatchSnapshot();

    // collapse menu
    userEvent.click(screen.getByRole('button'));

    // assert hidden again
    expect(within(screen.getByTestId('MainNavMobile')).getByRole('list')).toHaveClass('hidden');

    expect(asFragment()).toMatchSnapshot();
  });
});

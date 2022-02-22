import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Nav } from './Nav';

describe('Nav', () => {
  it('should render', () => {
    const { asFragment } = render(<Nav />);

    expect(screen.getByTestId('NavDesktop')).toBeInTheDocument();
    expect(screen.getByTestId('NavMobile')).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  it('should toggle mobile navigation', () => {
    const { asFragment } = render(<Nav />);

    expect(screen.getByTestId('NavMobile')).toBeInTheDocument();

    // assert hidden by default
    expect(within(screen.getByTestId('NavMobile')).getByRole('list')).toHaveClass('hidden');

    // expand menu
    userEvent.click(screen.getByRole('button'));

    // assert no longer hidden
    expect(within(screen.getByTestId('NavMobile')).getByRole('list')).not.toHaveClass('hidden');
    expect(asFragment()).toMatchSnapshot();

    // collapse menu
    userEvent.click(screen.getByRole('button'));

    // assert hidden again
    expect(within(screen.getByTestId('NavMobile')).getByRole('list')).toHaveClass('hidden');

    expect(asFragment()).toMatchSnapshot();
  });
});

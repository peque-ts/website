import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { NavItem } from '../../lib/nav.types';
import { Nav } from './Nav';

describe('Nav', () => {
  const items: NavItem[] = [
    {
      active: true,
      name: 'First',
      order: 1,
      to: '/docs/1',
      slug: 'first',
    },
    {
      active: false,
      name: 'Second',
      order: 2,
      to: '/docs/2',
      slug: 'second',
    },
    {
      active: false,
      name: 'Third',
      order: 3,
      to: '/docs/3',
      slug: 'third',
    },
  ];

  it('should render', () => {
    const { asFragment } = render(<Nav items={items} />);

    expect(screen.getAllByRole('link')).toHaveLength(3);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should toggle mobile nav', () => {
    render(<Nav items={items} />);

    // assert hidden by default
    expect(screen.getByRole('list').parentElement).toHaveClass('hidden');

    // expand menu
    userEvent.click(screen.getByRole('button'));

    // assert no longer hidden
    expect(screen.getByRole('list').parentElement).not.toHaveClass('hidden');

    // collapse menu
    userEvent.click(screen.getByRole('button'));

    // assert hidden again
    expect(screen.getByRole('list').parentElement).toHaveClass('hidden');
  });
});

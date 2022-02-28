import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { NavItem } from '../../lib/nav.types';
import { Nav } from './Nav';

describe('Nav', () => {
  const items: NavItem[] = [
    {
      active: true,
      name: 'First',
      to: '/docs/first/sub-1',
      slug: 'first/sub-1',
      children: [
        {
          active: true,
          name: 'Sub 1',
          to: '/docs/first/sub-1',
          slug: 'first/sub-1',
          children: [],
        },
        {
          active: false,
          name: 'Sub 2',
          to: '/docs/first/sub-2',
          slug: 'first/sub-2',
          children: [],
        },
      ],
    },
    {
      active: false,
      name: 'Second',
      to: '/docs/2',
      slug: 'second',
      children: [],
    },
    {
      active: false,
      name: 'Third',
      to: '/docs/3',
      slug: 'third',
      children: [],
    },
  ];

  it('should render', () => {
    const { asFragment } = render(<Nav items={items} />);

    expect(screen.getAllByRole('link')).toHaveLength(4);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should toggle mobile nav', () => {
    render(<Nav items={items} />);

    // assert hidden by default
    expect(screen.getAllByRole('list')[0].parentElement).toHaveClass('hidden');

    // expand menu
    userEvent.click(screen.getAllByRole('button')[0]);

    // assert no longer hidden
    expect(screen.getAllByRole('list')[0].parentElement).not.toHaveClass('hidden');

    // collapse menu
    userEvent.click(screen.getAllByRole('button')[0]);

    // assert hidden again
    expect(screen.getAllByRole('list')[0].parentElement).toHaveClass('hidden');
  });

  it('should toggle submenu', () => {
    render(<Nav items={items} />);

    expect(screen.getAllByRole('list')).toHaveLength(2);

    userEvent.click(screen.getByText('First'));

    expect(screen.getAllByRole('list')).toHaveLength(1);

    userEvent.click(screen.getByText('First'));

    expect(screen.getAllByRole('list')).toHaveLength(2);
  });
});

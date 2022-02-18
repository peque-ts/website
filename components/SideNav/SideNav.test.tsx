import { render, screen } from '@testing-library/react';

import { SideNav } from './SideNav';

describe('SideNav', () => {
  it('should render', () => {
    const { asFragment } = render(
      <SideNav
        items={[
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
        ]}
      />,
    );

    expect(screen.getAllByRole('link')).toHaveLength(3);
    expect(asFragment()).toMatchSnapshot();
  });
});

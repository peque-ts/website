import { render, screen } from '@testing-library/react';

import { Nav } from './Nav';

describe('Nav', () => {
  it('should render', () => {
    const { asFragment } = render(
      <Nav
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

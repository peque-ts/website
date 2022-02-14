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
          },
          {
            active: false,
            name: 'Second',
            order: 2,
            to: '/docs/2',
          },
          {
            active: false,
            name: 'Third',
            order: 3,
            to: '/docs/3',
          },
        ]}
      />,
    );

    expect(screen.getAllByRole('link')).toHaveLength(3);
    expect(asFragment()).toMatchSnapshot();
  });
});

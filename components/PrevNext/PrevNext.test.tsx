import { render } from '@testing-library/react';

import { PrevNextNavItems } from '../../lib/nav.types';
import { PrevNext } from './PrevNext';

describe('PrevNext', () => {
  const testItems: PrevNextNavItems[] = [
    {
      prev: null,
      next: {
        to: '/last',
        name: 'Last',
        slug: 'last',
        order: 2,
        active: false,
      },
    },
    {
      prev: {
        to: '/first',
        name: 'First',
        slug: 'first',
        order: 1,
        active: false,
      },
      next: {
        to: '/last',
        name: 'Last',
        slug: 'last',
        order: 3,
        active: false,
      },
    },
    {
      prev: {
        to: '/first',
        name: 'First',
        slug: 'first',
        order: 1,
        active: false,
      },
      next: null,
    },
  ];

  it.each(testItems)('should render', (items) => {
    const { asFragment } = render(<PrevNext items={items} />);

    expect(asFragment()).toMatchSnapshot();
  });
});

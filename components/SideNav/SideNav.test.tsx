import { render } from '@testing-library/react';

import { SideNav } from './SideNav';

describe('SideNav', () => {
  it('should render', () => {
    const { asFragment } = render(<SideNav />);

    expect(asFragment()).toMatchSnapshot();
  });
});

import { render } from '@testing-library/react';

import { List } from './List';

describe('List', () => {
  it('should render', () => {
    const { asFragment } = render(<List />);

    expect(asFragment()).toMatchSnapshot();
  });
});

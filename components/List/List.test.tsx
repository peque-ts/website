import { render } from '@testing-library/react';

import { List } from './List';

describe('List', () => {
  it('should render', () => {
    const { asFragment } = render(
      <List items={['one', 'two', 'three']}>
        {(item, index) => (
          <span>
            {item} ({index})
          </span>
        )}
      </List>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

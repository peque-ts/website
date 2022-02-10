import { render, screen } from '@testing-library/react';

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

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
    expect(asFragment()).toMatchSnapshot();
  });
});

import { render } from '@testing-library/react';

import { RepoCard } from './RepoCard';

describe('RepoCard', () => {
  it('should render', () => {
    const { asFragment } = render(<RepoCard />);

    expect(asFragment()).toMatchSnapshot();
  });
});

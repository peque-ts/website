import { render } from '@testing-library/react';

import { FeatureCard } from './FeatureCard';

describe('FeatureCard', () => {
  it('should render', () => {
    const { asFragment } = render(<FeatureCard />);

    expect(asFragment()).toMatchSnapshot();
  });
});

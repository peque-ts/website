import { render } from '@testing-library/react';

import { FeatureItem } from './FeatureItem';

describe('FeatureItem', () => {
  it('should render', () => {
    const { asFragment } = render(<FeatureItem />);

    expect(asFragment()).toMatchSnapshot();
  });
});

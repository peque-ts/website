import { render } from '@testing-library/react';

import { ButtonLink } from './ButtonLink';

describe('ButtonLink', () => {
  it('should render', () => {
    const { asFragment } = render(<ButtonLink />);

    expect(asFragment()).toMatchSnapshot();
  });
});

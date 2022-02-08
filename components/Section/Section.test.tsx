import { render } from '@testing-library/react';

import { Section } from './Section';

describe('Section', () => {
  it('should render', () => {
    const { asFragment } = render(<Section />);

    expect(asFragment()).toMatchSnapshot();
  });
});

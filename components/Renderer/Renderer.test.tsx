import { render } from '@testing-library/react';

import { Renderer } from './Renderer';

describe('Renderer', () => {
  it('should render', () => {
    const { asFragment } = render(<Renderer />);

    expect(asFragment()).toMatchSnapshot();
  });
});

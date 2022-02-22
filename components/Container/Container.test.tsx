import { render } from '@testing-library/react';

import { Container } from './Container';

describe('Container', () => {
  it('should render', () => {
    const { container, asFragment } = render(<Container className="pizza" />);

    expect(container.children[0]).toHaveClass('container mx-auto px-4 pizza');
    expect(asFragment()).toMatchSnapshot();
  });
});

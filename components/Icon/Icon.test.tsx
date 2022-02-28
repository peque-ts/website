import { render } from '@testing-library/react';

import { Icon } from './Icon';

describe('Icon', () => {
  it('should render', () => {
    const { asFragment, container } = render(<Icon size={32} name="GitHub" />);

    expect(container.children[0].tagName).toBe('svg');
    expect(asFragment()).toMatchSnapshot();
  });
});

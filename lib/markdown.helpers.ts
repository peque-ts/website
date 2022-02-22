import { h } from 'hastscript';

const getAnchorSvg = () => {
  return h(
    'svg',
    {
      className: 'anchor align-middle inline-block invisible group-hover:visible ml-2',
      viewBox: '0 0 16 16',
      version: '1.1',
      width: 16,
      height: 16,
    },
    [
      h('path', {
        d: 'M4 6.49.79 9.67a1 1 0 0 0 0 1.42l2.12 2.12a1 1 0 0 0 1.42 0L7.51 10M10 7.51l3.18-3.18a1 1 0 0 0 0-1.42L11.09.79a1 1 0 0 0-1.42 0L6.49 4M9 5 5 9',
        style: 'fill:none;stroke:#FFF;stroke-linecap:round;stroke-linejoin:round',
        transform: 'scale(1.14286)',
      }),
    ],
  );
};

export { getAnchorSvg };

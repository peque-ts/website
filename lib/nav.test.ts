import * as fs from './fs';
import { buildNavItems, getPrevNextNavItems } from './nav';
import { MenuItem, NavItem } from './nav.types';

describe('nav', () => {
  describe('buildNavItems', () => {
    it('should build navigation items', async () => {
      const input: MenuItem[] = [
        'root-1',
        'root-2',
        [
          'Sub',
          [
            'sub/child-1',
            'sub/child-2',
            'sub/child-3', // active
            'sub/child-4',
            'sub/child-5',
            'sub/child-6',
          ],
        ],
      ];

      const expectedOutput: NavItem[] = [
        {
          name: 'Test',
          to: '/docs/pizza/root-1',
          active: false,
          slug: 'root-1',
          children: [],
        },
        {
          name: 'Test',
          to: '/docs/pizza/root-2',
          active: false,
          slug: 'root-2',
          children: [],
        },
        {
          name: 'Sub',
          to: '/docs/pizza/sub/child-1',
          active: true,
          slug: 'sub/child-1',
          children: [1, 2, 3, 4, 5, 6].map((x) => ({
            name: 'Test',
            to: `/docs/pizza/sub/child-${x}`,
            active: x === 3,
            slug: `sub/child-${x}`,
            children: [],
          })),
        },
      ];

      const menuMock = jest.spyOn(fs, 'getProjectMenu').mockResolvedValue(input);
      const readMock = jest.spyOn(fs, 'read').mockResolvedValue(`---\ntitle: Test\n---`);

      await expect(buildNavItems('pizza', 'sub/child-3')).resolves.toEqual(expectedOutput);

      menuMock.mockRestore();
      readMock.mockRestore();
    });
  });

  describe('getPrevNextNavItems', () => {
    it('should calculate prev and next as expected', () => {
      expect(
        getPrevNextNavItems([
          {
            children: [],
            active: true,
            name: 'Architecture',
            to: '/docs/framework/architecture',
            slug: 'architecture',
          },
        ]),
      ).toEqual({ next: null, prev: null });

      expect(
        getPrevNextNavItems([
          {
            children: [
              {
                children: [],
                active: true,
                name: 'Overview',
                to: '/docs/framework/builtin-features/overview',
                slug: 'builtin-features/overview',
              },
            ],
            active: true,
            name: 'Built-in features',
            to: '/docs/framework/builtin-features/overview',
            slug: 'builtin-features/overview',
          },
        ]),
      ).toEqual({ next: null, prev: null });

      expect(
        getPrevNextNavItems([
          {
            children: [
              {
                children: [],
                active: true,
                name: 'Overview',
                to: '/docs/framework/builtin-features/overview',
                slug: 'builtin-features/overview',
              },
              {
                children: [],
                active: false,
                name: 'Scheduler',
                to: '/docs/framework/builtin-features/scheduler',
                slug: 'builtin-features/scheduler',
              },
            ],
            active: true,
            name: 'Built-in features',
            to: '/docs/framework/builtin-features/overview',
            slug: 'builtin-features/overview',
          },
        ]),
      ).toEqual({
        next: {
          children: [],
          active: false,
          name: 'Scheduler',
          to: '/docs/framework/builtin-features/scheduler',
          slug: 'builtin-features/scheduler',
        },
        prev: null,
      });

      expect(
        getPrevNextNavItems([
          {
            children: [
              {
                children: [],
                active: false,
                name: 'Overview',
                to: '/docs/framework/builtin-features/overview',
                slug: 'builtin-features/overview',
              },
              {
                children: [],
                active: true,
                name: 'Scheduler',
                to: '/docs/framework/builtin-features/scheduler',
                slug: 'builtin-features/scheduler',
              },
            ],
            active: true,
            name: 'Built-in features',
            to: '/docs/framework/builtin-features/overview',
            slug: 'builtin-features/overview',
          },
        ]),
      ).toEqual({
        next: null,
        prev: {
          children: [],
          active: false,
          name: 'Overview',
          to: '/docs/framework/builtin-features/overview',
          slug: 'builtin-features/overview',
        },
      });

      expect(
        getPrevNextNavItems([
          {
            children: [
              {
                children: [],
                active: false,
                name: 'Overview',
                to: '/docs/framework/builtin-features/overview',
                slug: 'builtin-features/overview',
              },
              {
                children: [],
                active: true,
                name: 'Scheduler',
                to: '/docs/framework/builtin-features/scheduler',
                slug: 'builtin-features/scheduler',
              },
              {
                children: [],
                active: false,
                name: 'Logger',
                to: '/docs/framework/builtin-features/logger',
                slug: 'builtin-features/logger',
              },
            ],
            active: true,
            name: 'Built-in features',
            to: '/docs/framework/builtin-features/overview',
            slug: 'builtin-features/overview',
          },
        ]),
      ).toEqual({
        next: {
          children: [],
          active: false,
          name: 'Logger',
          to: '/docs/framework/builtin-features/logger',
          slug: 'builtin-features/logger',
        },
        prev: {
          children: [],
          active: false,
          name: 'Overview',
          to: '/docs/framework/builtin-features/overview',
          slug: 'builtin-features/overview',
        },
      });

      expect(
        getPrevNextNavItems([
          {
            children: [
              {
                children: [],
                active: true,
                name: 'Overview',
                to: '/docs/framework/builtin-features/overview',
                slug: 'builtin-features/overview',
              },
            ],
            active: true,
            name: 'Built-in features',
            to: '/docs/framework/builtin-features/overview',
            slug: 'builtin-features/overview',
          },
          {
            children: [],
            active: false,
            name: 'Architecture',
            to: '/docs/framework/architecture',
            slug: 'architecture',
          },
        ]),
      ).toEqual({
        next: {
          children: [],
          active: false,
          name: 'Architecture',
          to: '/docs/framework/architecture',
          slug: 'architecture',
        },
        prev: null,
      });

      expect(
        getPrevNextNavItems([
          {
            children: [],
            active: true,
            name: 'Architecture',
            to: '/docs/framework/architecture',
            slug: 'architecture',
          },
          {
            children: [
              {
                children: [],
                active: false,
                name: 'Overview',
                to: '/docs/framework/builtin-features/overview',
                slug: 'builtin-features/overview',
              },
            ],
            active: false,
            name: 'Built-in features',
            to: '/docs/framework/builtin-features/overview',
            slug: 'builtin-features/overview',
          },
        ]),
      ).toEqual({
        next: {
          children: [],
          active: false,
          name: 'Overview',
          to: '/docs/framework/builtin-features/overview',
          slug: 'builtin-features/overview',
        },
        prev: null,
      });

      expect(
        getPrevNextNavItems([
          {
            children: [
              {
                children: [],
                active: false,
                name: 'First submenu child 1',
                to: '/docs/framework/first-submenu/child-1',
                slug: 'first-submenu/child-1',
              },
              {
                children: [],
                active: false,
                name: 'First submenu child 2',
                to: '/docs/framework/first-submenu/child-2',
                slug: 'first-submenu/child-2',
              },
            ],
            active: false,
            name: 'First submenu',
            to: '/docs/framework/first-submenu/child-1',
            slug: 'first-submenu/child-1',
          },
          {
            children: [
              {
                children: [],
                active: true,
                name: 'Active submenu child',
                to: '/docs/framework/active-submenu/child',
                slug: 'active-submenu/child',
              },
            ],
            active: true,
            name: 'Active submenu',
            to: '/docs/framework/active-submenu/child',
            slug: 'active-submenu/child',
          },
          {
            children: [
              {
                children: [],
                active: false,
                name: 'Last submenu child 1',
                to: '/docs/framework/last-submenu/child-1',
                slug: 'last-submenu/child-1',
              },
              {
                children: [],
                active: false,
                name: 'Last submenu child 2',
                to: '/docs/framework/last-submenu/child-2',
                slug: 'last-submenu/child-2',
              },
            ],
            active: false,
            name: 'Last submenu',
            to: '/docs/framework/last-submenu/child-1',
            slug: 'last-submenu/child-1',
          },
        ]),
      ).toEqual({
        next: {
          children: [],
          active: false,
          name: 'Last submenu child 1',
          to: '/docs/framework/last-submenu/child-1',
          slug: 'last-submenu/child-1',
        },
        prev: {
          children: [],
          active: false,
          name: 'First submenu child 2',
          to: '/docs/framework/first-submenu/child-2',
          slug: 'first-submenu/child-2',
        },
      });
    });
  });
});

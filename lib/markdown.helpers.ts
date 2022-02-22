import { parseSelector } from 'hast-util-parse-selector';
import { selectAll } from 'hast-util-select';
import { h } from 'hastscript';
import puppeteer from 'puppeteer';
import { visit } from 'unist-util-visit';

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

function remarkMermaid() {
  const SCRIPT_PATH = `${process.cwd()}/node_modules/mermaid/dist/mermaid.min.js`;
  const isMermaid = (node: any): boolean => node.type === 'code' && node.lang === 'mermaid';

  return async (tree: any) => {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();

    for (const node of tree.children ?? []) {
      if (!isMermaid(node)) {
        continue;
      }

      await page.goto(`data:text/html,<div id="mermaid">${node.value}</div>`);
      await page.addScriptTag({ path: SCRIPT_PATH });

      await page.evaluate(() => {
        const mermaid = (window as any).mermaid;

        mermaid.initialize({ startOnLoad: true, theme: 'neutral' });
        mermaid.init('#mermaid');
      });

      const svg = await page.$eval('#mermaid', (el) => el.innerHTML);

      Object.assign(node, { type: 'html', value: svg });
    }

    await page.close();
    await browser.close();
  };
}

function rehypeAddClasses(options: Record<string, string>) {
  return (tree: any) => {
    for (const [selectors, className] of Object.entries(options)) {
      for (const selector of selectors.split(',')) {
        for (const match of selectAll(selector, tree)) {
          visit(tree, match, (node: any) => {
            node.properties.class = `${node.properties.class ?? ''} ${className}`.trim();
          });
        }
      }
    }
  };
}

function rehypeTableResponsive() {
  return (tree: any) => {
    for (const match of selectAll('table', tree)) {
      visit(tree, match, (node: any, index: number, parent: any) => {
        const wrapper = parseSelector('div.table-responsive');
        wrapper.children = [node];
        parent.children[index] = wrapper;
      });
    }
  };
}

export { getAnchorSvg, remarkMermaid, rehypeTableResponsive, rehypeAddClasses };

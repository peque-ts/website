import puppeteer from 'puppeteer';

const SCRIPT_PATH = `${process.cwd()}/node_modules/mermaid/dist/mermaid.min.js`;

const isMermaid = (node: any): boolean => node.type === 'code' && node.lang === 'mermaid';

export function remarkMermaid() {
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

        mermaid.initialize({ startOnLoad: true, theme: 'dark' });
        mermaid.init('#mermaid');
      });

      const svg = await page.$eval('#mermaid', (el) => el.innerHTML);

      Object.assign(node, { type: 'html', value: svg });
    }

    await page.close();
    await browser.close();
  };
}

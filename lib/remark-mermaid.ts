import mermaid from 'mermaid';
import { Plugin } from 'unified';
import { map } from 'unist-util-map';

const isMermaidNode = (node: Record<string, any>): boolean =>
  node.type === 'code' && node.lang === 'mermaid';

export const remarkMermaid: Plugin = () => {
  return async (tree) => {
    map(tree, (node: any) => {
      if (!isMermaidNode(node)) {
        return node;
      }

      Object.assign(node, {
        type: 'html',
        value: `<div class="mermaid">\n${node.value}\n</div>`,
      });

      return node;
    });
  };
};

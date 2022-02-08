const fs = require('node:fs/promises');

async function run() {
  const [, , ...input] = process.argv;

  // Validate

  for (const componentName of input) {
    if (typeof componentName !== 'string') {
      console.log(`Missing component name.\n`);
      console.log(`Usage: pnpm run generate:component ComponentName`);
      console.log(`or: pnpm run generate:component Header Navbar Page ... for multiple\n`);
      process.exit(0);
    }

    if (!/^[a-zA-Z]+$/.test(componentName.trim())) {
      console.log(
        `[${componentName}] is not a valid component name. No files have been created.\n`,
      );
      process.exit(0);
    }
  }

  // Cleanup

  const componentNames = [
    ...new Set(
      input.map(
        (componentName) =>
          `${componentName.trim().charAt(0).toUpperCase()}${componentName.trim().slice(1)}`,
      ),
    ),
  ];

  // Content

  const data = componentNames.map((componentName) => {
    const name = `${componentName.trim().charAt(0).toUpperCase()}${componentName.trim().slice(1)}`;

    const contentIndex = `export { ${name} } from './${name}';\n`;

    const contentComponent = `import React from 'react';

export const ${name}: React.VFC = () => {
  return <p>${name}</p>;
};\n`;

    const contentTest = `import { render } from '@testing-library/react';

import { ${name} } from './${name}';

describe('${name}', () => {
  it('should render', () => {
    const { asFragment } = render(<${name} />);

    expect(asFragment()).toMatchSnapshot();
  });
});\n`;

    return {
      name,
      getMakeFolder: () => fs.mkdir(`./components/${name}`),
      getMakeFiles: () => [
        fs.writeFile(`./components/${name}/index.ts`, contentIndex, { encoding: 'utf-8' }),
        fs.writeFile(`./components/${name}/${name}.tsx`, contentComponent, { encoding: 'utf-8' }),
        fs.writeFile(`./components/${name}/${name}.test.tsx`, contentTest, { encoding: 'utf-8' }),
      ],
    };
  });

  // Make folders
  await Promise.all(data.map((item) => item.getMakeFolder()));

  // Make files
  await Promise.all(data.map((item) => item.getMakeFiles()).flat());

  console.log(`Created ${componentNames.length} components:\n`);
  console.log(componentNames.map((name) => `✓ ./components/${name}`).join('\n'), '\n');
}

run();

import { unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';

import { getProjectMenu, getProjectSectionPaths, read } from './fs';

describe('fs', () => {
  describe('read', () => {
    it('should read file content', async () => {
      await writeFile(path.join(process.cwd(), 'test.txt'), 'test', { encoding: 'utf-8' });

      await expect(read('test.txt')).resolves.toEqual('test');

      await unlink(path.join(process.cwd(), 'test.txt'));
    });
  });

  describe('getProjectMenu', () => {
    it('should retrieve content of _menu.json file of a project', async () => {
      await expect(getProjectMenu('framework')).resolves.toEqual(
        expect.arrayContaining(['getting-started']),
      );
    });
  });

  describe('getProjectSectionPaths', () => {
    it('should return all the docs paths', async () => {
      await expect(getProjectSectionPaths()).resolves.toEqual(expect.any(Array));
    });
  });
});

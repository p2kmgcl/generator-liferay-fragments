import AdmZip from 'adm-zip';
import fs from 'fs';
import glob from 'glob';
import ncp from 'ncp';
import path from 'path';
import rimraf from 'rimraf';

import api from '../utils/api';
import getProjectContent from '../utils/project-content/get-project-content';
import writeProjectContent from '../utils/project-content/write-project-content';
import { createTemporaryDirectory } from '../utils/temporary';
import exportCollections from './export-legacy';

const ZIP_PATHS = [
  'fragments',
  'master-pages',
  'page-templates',
  'display-page-templates',
];

const ZIP_FRAGMENT_COLLECTION_DIRECTORY_NAME = [
  'fragments',
  'fragment-compositions',
];

export default async function exportProject(
  groupId: string,
  destinationPath: string
): Promise<void> {
  const projectContent = getProjectContent(destinationPath);
  const tmpDir = createTemporaryDirectory();
  const tmpSrc = path.join(tmpDir.name, 'src');

  try {
    new AdmZip(await api.exportZip(groupId)).extractAllTo(tmpDir.name);
    fs.mkdirSync(tmpSrc);

    // Move generated categories (fragments, page-templates...) to a
    // single src directory

    for (const from of ZIP_PATHS) {
      const fromBasePath = path.join(tmpDir.name, from);
      const toBasePath = path.join(tmpSrc);

      for (const fromPath of glob.sync(path.join(fromBasePath, '*'))) {
        // eslint-disable-next-line no-await-in-loop
        await move(fromPath, fromPath.replace(fromBasePath, toBasePath));
      }
    }

    // Move autogenerated subdirectories (like fragmentCollection/fragments/*)
    // one level up, as generator doesn't create them

    for (const collectionDirectoryName of ZIP_FRAGMENT_COLLECTION_DIRECTORY_NAME) {
      for (const collectionDirectoryPath of glob.sync(
        path.join(tmpSrc, '*', collectionDirectoryName)
      )) {
        for (const fragmentPath of glob.sync(
          path.join(collectionDirectoryPath, '*')
        )) {
          const fragmentName = fragmentPath.replace(
            collectionDirectoryPath,
            ''
          );

          // eslint-disable-next-line no-await-in-loop
          await move(
            fragmentPath,
            path.resolve(path.join(fragmentPath, '..', '..', fragmentName))
          );
        }

        rimraf.sync(collectionDirectoryPath);
      }
    }

    // Merge everything with existing project

    await move(
      path.join(tmpDir.name, 'src'),
      path.join(destinationPath, 'src')
    );
  } catch (_) {
    projectContent.collections = await exportCollections(groupId);
    await writeProjectContent(projectContent.basePath, projectContent);
  }

  tmpDir.removeCallback();
}

function move(fromPath: string, toPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    ncp(fromPath, toPath, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

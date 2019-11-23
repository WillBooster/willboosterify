import path from 'path';
import fse from 'fs-extra';
import { PackageConfig } from '../types/packageConfig';
import { FsUtil } from '../utils/fsUtil';

const content = `{
  "extends": ["willbooster"]
}
`;

export async function generateRenovateJson(config: PackageConfig): Promise<void> {
  const filePath = path.resolve(config.dirPath, '.renovaterc.json');
  await fse.remove(path.resolve(config.dirPath, '.dependabot'));
  await FsUtil.generateFile(filePath, content);
}
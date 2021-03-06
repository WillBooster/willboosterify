import path from 'path';

import { FsUtil } from '../utils/fsUtil';
import { IgnoreFileUtil } from '../utils/ignoreFileUtil';
import { PackageConfig } from '../utils/packageConfig';

const defaultUserContent = `${IgnoreFileUtil.header}


${IgnoreFileUtil.separator}
`;

const commonContent = `
3rd-party/
@types/
__generated__/
android/
ios/
no-format/
test-fixtures/
*.config.js
*.d.ts
*.min.js
.yarn/
.pnp.js
`;

export async function generateEslintignore(config: PackageConfig): Promise<void> {
  const filePath = path.resolve(config.dirPath, '.eslintignore');
  const userContent = IgnoreFileUtil.getUserContent(filePath) || defaultUserContent;

  const gitignoreFilePath = path.resolve(config.dirPath, '.gitignore');
  const gitignoreContent = IgnoreFileUtil.getExistingContent(gitignoreFilePath) || '';

  await FsUtil.generateFile(filePath, userContent + commonContent + gitignoreContent);
}

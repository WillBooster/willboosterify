import path from 'path';

import { Extensions } from '../utils/extensions';
import { FsUtil } from '../utils/fsUtil';
import { PackageConfig } from '../utils/packageConfig';

const content = `root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

${generateExtensions(Extensions.codeWith2IndentSize)}
indent_size = 2
indent_style = space

${generateExtensions(Extensions.codeWith4IndentSize)}
indent_size = 4
indent_style = space

${generateExtensions(Extensions.codeWith8IndentSize)}
indent_size = 8
indent_style = space

${generateExtensions(Extensions.markdownLike)}
max_line_length = off
trim_trailing_whitespace = false

[{Makefile,*.mk}]
indent_style = tab
`;

export async function generateEditorconfig(config: PackageConfig): Promise<void> {
  const filePath = path.resolve(config.dirPath, '.editorconfig');
  await FsUtil.generateFile(filePath, content);
}

function generateExtensions(extensions: string[]): string {
  return extensions.length > 1 ? `[*.{${extensions.join(',')}}]` : `[*.${extensions[0]}]`;
}

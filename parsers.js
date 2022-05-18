import * as fs from 'fs';
import * as yaml from 'js-yaml';
import path from 'path';

// const currentDir = process.cwd();
// const pathToFile = path.join(currentDir, '__fixtures__');

export const readFile = (filename) => fs.readFileSync(filename, 'utf-8');

export const parsingFile = (fileName) => {
  const fileExtension = path.extname(fileName);
  switch (fileExtension) {
    case ('.json'):
      return JSON.parse(readFile(fileName));
    case ('.yaml'):
      return yaml.load(readFile(fileName));
    case ('.yml'):
      return yaml.load(readFile(fileName));
    default:
      return null;
  }
};

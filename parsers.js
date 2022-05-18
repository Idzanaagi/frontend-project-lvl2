import * as fs from 'fs';
import * as yaml from 'js-yaml';
import path from 'path';

const getFilePath = (file) => {
  if (path.isAbsolute(file)) {
    return file;
  }
  return path.resolve(process.cwd(), file);
};

export const readFile = (file) => fs.readFileSync(`${getFilePath(file)}`, 'utf-8');

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

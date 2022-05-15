/* eslint-disable no-underscore-dangle */
import * as fs from 'fs';
import * as yaml from 'js-yaml';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const readFile = (filename) => fs.readFileSync(path.join(__dirname, '/', '__fixtures__', filename), 'utf-8');

export const parsingFile = (fileName) => {
  let result;
  const fileExtension = path.extname(fileName);

  if (fileExtension === '.json') {
    result = JSON.parse(readFile(fileName));
  }

  if (fileExtension === '.yaml' || fileExtension === '.yml') {
    result = yaml.load(readFile(fileName));
  }
  return result;
};

import * as fs from 'fs';
import * as yaml from 'js-yaml';
import path from 'path';

const parsingFile = (fileName) => {
  const fileExtension = path.extname(String(fileName));
  if (fileExtension === '.json') {
    const readFile = fs.readFileSync(fileName);
    return JSON.parse(readFile);
  }
  if (fileExtension === '.yaml' || fileExtension === '.yml') {
    try {
      const readFile = yaml.load(fs.readFileSync(fileName));
      return readFile;
    } catch (e) {
      return e;
    }
  }
  return null;
};

// console.log(parsingFile('./__fixtures__/file1.yaml'));

export default parsingFile;

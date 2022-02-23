import * as fs from 'fs';
import * as yaml from 'js-yaml';
import path from 'path';

const parsers = (obj) => {
  const split = path.extname(obj);
  if (split === '.json') {
    const readFirst = fs.readFileSync(obj);
    return JSON.parse(readFirst);
  }
  if (split === '.yaml' || split === '.yml') {
    try {
      const doc = yaml.load(fs.readFileSync(obj));
      return doc;
    } catch (e) {
      return e;
    }
  }
  return null;
};

export default parsers;

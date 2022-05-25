import * as yaml from 'js-yaml';
import readFile from './readfile.js';

const parsingFile = (data, format) => {
  switch (format) {
    case ('json'):
      return JSON.parse(readFile(data));
    case ('yaml'):
      return yaml.load(readFile(data));
    case ('yml'):
      return yaml.load(readFile(data));
    default:
      throw new Error(`Unsupported file extension: '${data}'!`);
  }
};

export default parsingFile;

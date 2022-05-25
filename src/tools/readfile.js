import * as fs from 'fs';
import getFilePath from './getPathToFile.js';

const readFile = (file) => fs.readFileSync(`${getFilePath(file)}`, 'utf-8');

export default readFile;

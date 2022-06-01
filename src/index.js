import path from 'path';
import * as fs from 'fs';
import parseFile from './tools/parsers.js';
import getTree from './tools/getTree.js';
import chooseFormatters from './formatters/index.js';

const fileExtension = (file) => path.extname(file).split('.')[1];
const getFilePath = (file) => path.resolve(process.cwd(), file);
const readFile = (file) => fs.readFileSync(getFilePath(file), 'utf-8');

const getDiff = (filename1, filename2, formatName = 'stylish') => {
  const readFile1 = readFile(filename1);
  const readFile2 = readFile(filename2);
  const getFileExtension1 = fileExtension(filename1);
  const getFileExtension2 = fileExtension(filename2);
  const parseFile1 = parseFile(readFile1, getFileExtension1);
  const parseFile2 = parseFile(readFile2, getFileExtension2);
  const getAst = getTree(parseFile1, parseFile2);
  const getNewTree = chooseFormatters(getAst, formatName);
  return getNewTree;
};

export default getDiff;

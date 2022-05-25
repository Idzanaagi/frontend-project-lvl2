import fileExtension from './tools/getFileExtension.js';
import parsingFile from './tools/parsers.js';
import genDiff from './tools/gendiff.js';
import chooseFormatters from './formatters/index.js';

const getDiff = (filename1, filename2, formatName = 'stylish') => {
  const getFileExtension1 = fileExtension(filename1);
  const getFileExtension2 = fileExtension(filename2);
  const parseFile1 = parsingFile(filename1, getFileExtension1);
  const parseFile2 = parsingFile(filename2, getFileExtension2);
  const getTree = genDiff(parseFile1, parseFile2);
  const getNewTree = chooseFormatters(getTree, formatName);
  return getNewTree;
};

export default getDiff;

import _ from 'lodash';
import { parsingFile } from '../parsers.js';
import chooseFormatters from './formatters/index.js';


const getDiff = (filename1, filename2, formatName = 'stylish') => {
  const parseFile1 = parsingFile(filename1);
  const parseFile2 = parsingFile(filename2);
  const getTree = genDiff(parseFile1, parseFile2);
  const getNewTree = chooseFormatters(getTree, formatName);
  return getNewTree;
};

export default getDiff;

function genDiff(filename1, filename2) {
  const buidTree = (obj1, obj2) => {
    const keys = Object.keys({ ...obj1, ...obj2 });
    const sortedKeys = _.sortedUniq(_.sortBy(keys)).map((key) => {
        if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
          return { type: 'nested', key, childs: buidTree(obj1[key], obj2[key]) };
        } if (!Object.hasOwn(obj1, key)) {
          return { type: 'added', key, value: obj2[key] };
        } if (!Object.hasOwn(obj2, key)) {
          return { type: 'removed', key, value: obj1[key] };
        } if (obj1[key] === obj2[key]) {
          return { type: 'same', key, value: obj1[key] };
        }
        return {
          type: 'updated', key, valBefore: obj1[key], valAfter: obj2[key],
        };
      });
    return sortedKeys;
    
  };
  return buidTree(filename1, filename2);
};

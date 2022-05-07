import _ from 'lodash';
import { parsingFile } from '../parsers.js';

const addType = (data1, data2) => {
  const keys = Object.keys({ ...data1, ...data2 });
  const sortedKeys = _.sortBy(keys);

  const arrForUpdate = sortedKeys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    if (!_.has(data1, key)) {
      return { type: 'add', key, val: value2 };
    }
    if (!_.has(data2, key)) {
      return { type: 'remove', key, val: value1 };
    }
    if (!_.isEqual(value1, value2)) {
      return {
        type: 'updated', key, val1: value1, val2: value2,
      };
    }
    return { type: 'same', key, val: value1 };
  });
  return arrForUpdate;
};

const updateTypeToSymbol = (obj) => {
  const arr = [];
  obj.forEach((item) => {
    if (item.type === 'remove') {
      arr.push(`- ${item.key}: ${item.val}`);
    }
    if (item.type === 'add') {
      arr.push(`+ ${item.key}: ${item.val}`);
    }
    if (item.type === 'same') {
      arr.push(`  ${item.key}: ${item.val}`);
    }
    if (item.type === 'updated') {
      arr.push(`- ${item.key}: ${item.val1}`);
      arr.push(`+ ${item.key}: ${item.val2}`);
    }
  });
  return arr;
};

const getTree = (obj1, obj2) => {
  const readFirst = parsingFile(obj1);
  const readSecond = parsingFile(obj2);
  const typing = addType(readFirst, readSecond);
  const typeToSymbol = updateTypeToSymbol(typing);
  typeToSymbol.toString();
  const join = typeToSymbol.join(', ');
  const replace = join.replace(/,/g, '\n').trim();
  return (`{\n ${replace}\n}`);
};

export default getTree;

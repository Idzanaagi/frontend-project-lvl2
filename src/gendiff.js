import _ from 'lodash';
import * as fs from 'fs';

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

const gendiff = (obj1 = '__fixtures__/file1.json', obj2 = '__fixtures__/file2.json') => {
  const readFirst = fs.readFileSync(obj1);
  const readSecond = fs.readFileSync(obj2);
  const parseData1 = JSON.parse(readFirst);
  const parseData2 = JSON.parse(readSecond);
  const typing = addType(parseData1, parseData2);
  const typeToSymbol = updateTypeToSymbol(typing);
  typeToSymbol.toString();
  const join = typeToSymbol.join(', ');
  const replace = join.replace(/,/g, '\n').trim();
  return (`{\n ${replace}\n}`);
};
export default gendiff;

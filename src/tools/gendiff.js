import _ from 'lodash';

function genDiff(filename1, filename2) {
  const buidTree = (obj1, obj2) => {
    const keys = Object.keys({ ...obj1, ...obj2 });
    const sortedKeys = _.sortedUniq(_.sortBy(keys)).map((key) => {
      if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
        return { type: 'nested', key, childs: buidTree(obj1[key], obj2[key]) };
      } if (!_.has(obj1, key)) {
        return { type: 'added', key, value: obj2[key] };
      } if (!_.has(obj2, key)) {
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
}

export default genDiff;

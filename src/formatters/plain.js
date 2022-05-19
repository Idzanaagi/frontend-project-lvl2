import _ from 'lodash';

const updatingType = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const plain = (tree) => {
  const propPath = (node, property = '') => {
    const formatting = node.flatMap(({
      type, key, childs, value, valBefore, valAfter,
    }) => {
      switch (type) {
        case 'nested':
          return propPath(childs, `${property}${key}.`);
        case 'added':
          return `Property '${property}${key}' was added with value: ${updatingType(value)}`;
        case 'removed':
          return `Property '${property}${key}' was removed`;
        case 'updated':
          return `Property '${property}${key}' was updated. From ${updatingType(valBefore)} to ${updatingType(valAfter)}`;
        case 'same':
          return [];
        default:
          throw new Error('formatter plain implementation error');
      }
    });
    return `${formatting.join('\n')}`;
  };
  return propPath(tree);
};
export default plain;

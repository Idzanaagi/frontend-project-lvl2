import _ from 'lodash';

const space = ' ';
const baseValueIndent = 2;
const extraSpace = 4;

const keySpace = (depth) => space.repeat(baseValueIndent + (depth * extraSpace));
const bracketSpace = (depth) => space.repeat(depth * extraSpace);

const addFormatting = (data, depth) => {
  if (!_.isObject(data)) {
    return `${data}`;
  }
  const dataToObj = Object.entries(data);

  const result = dataToObj.map(([key, value]) => (`${keySpace(depth + 1)}  ${key}: ${addFormatting(value, depth + 1)}`));
  return `{\n${result.join('\n')}\n${bracketSpace(depth + 1)}}`;
};

const stylish = (tree) => {
  const format = (node, depth) => {
    const formatting = node.map(({
      type, key, childs, value, valBefore, valAfter,
    }) => {
      switch (type) {
        case 'nested':
          return `${keySpace(depth)}  ${key}: ${format(childs, depth + 1)}`;
        case 'added':
          return `${keySpace(depth)}+ ${key}: ${addFormatting(value, depth)}`;
        case 'removed':
          return `${keySpace(depth)}- ${key}: ${addFormatting(value, depth)}`;
        case 'updated':
          return `${keySpace(depth)}- ${key}: ${addFormatting(valBefore, depth)}\n${keySpace(depth)}+ ${key}: ${addFormatting(valAfter, depth)}`;
        case 'same':
          return `${keySpace(depth)}  ${key}: ${addFormatting(value, depth)}`;
        default:
          throw new Error('formatter stylish implementation error');
      }
    });
    return `{\n${formatting.join('\n')}\n${bracketSpace(depth)}}`;
  };
  return format(tree, 0);
};
export default stylish;

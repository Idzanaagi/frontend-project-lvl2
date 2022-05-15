import plain from './plain.js';
import stylish from './stylish.js';
import json from './json.js';

const chooseFormatters = (tree, formatName) => {
  let formatter;
  if (formatName === 'stylish') {
    formatter = stylish(tree);
  }
  if (formatName === 'plain') {
    formatter = plain(tree);
  }
  if (formatName === 'json') {
    formatter = json(tree);
  }
  return formatter;
};

export default chooseFormatters;

/*
empty comment
*/

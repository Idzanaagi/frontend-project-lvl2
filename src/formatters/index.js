import plain from './plain.js';
import stylish from './stylish.js';

const chooseFormatters = (tree, formatName) => {
  switch (formatName) {
    case 'stylish': {
      return stylish(tree);
    }
    case 'plain': {
      return plain(tree);
    }
    case 'json': {
      return JSON.stringify(tree);
    }
    default:
      throw new Error('Uknown formatter');
  }
};

export default chooseFormatters;

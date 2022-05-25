import path from 'path';

const getFilePath = (file) => {
  if (path.isAbsolute(file)) {
    return file;
  }
  return path.resolve(process.cwd(), file);
};

export default getFilePath;

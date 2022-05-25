import path from 'path';

const fileExtension = (file) => path.extname(file).split('.')[1];

export default fileExtension;

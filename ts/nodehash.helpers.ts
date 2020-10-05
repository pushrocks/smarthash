import * as plugins from './nodehash.plugins';

export const hashStreamPipeStop = (resolveFuntion) => {
  const forEach = (chunk: Buffer, enc, cb) => {
    resolveFuntion(chunk.toString('utf8'));
    cb(null, chunk);
  };

  const atEnd = (cb) => {
    cb();
  };

  return plugins.through2(forEach, atEnd);
};

import * as plugins from './nodehash.plugins';
import * as helpers from './nodehash.helpers';

/**
 * creates sha256 Hash from Stream
 */
export let sha256FromStream = (input): Promise<string> => {
  let done = plugins.q.defer<string>();
  let hash = plugins.crypto.createHash('sha256');

  hash['setEncoding']('hex');
  input.pipe(hash).pipe(helpers.hashStreamPipeStop(done.resolve));
  return done.promise;
};

/**
 * creates sha256 Hash from File;
 */
export let sha256FromFile = (filePath: string) => {
  let done = plugins.q.defer();
  let absolutePath = plugins.path.resolve(filePath);
  let readableStream = plugins.fs.createReadStream(absolutePath);
  sha256FromStream(readableStream).then(resultHashString => {
    done.resolve(resultHashString);
  });
  return done.promise;
};

/**
 * Computes sha256 Hash from String synchronously
 */
export let sha256FromStringSync = stringArg => {
  let hash = plugins.crypto.createHash('sha256');
  hash.update(stringArg);
  return hash.digest('hex');
};

/**
 * Computes sha256 Hash from String
 */
export let sha256FromString = stringArg => {
  let done = plugins.q.defer();
  let hash = plugins.crypto.createHash('sha256');
  hash.update(stringArg);
  let hashResult = hash.digest('hex');
  done.resolve(hashResult);
  return done.promise;
};

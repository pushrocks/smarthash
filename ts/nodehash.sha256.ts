import * as plugins from './nodehash.plugins';
import * as helpers from './nodehash.helpers';

/**
 * creates sha256 Hash from Stream
 */
export const sha256FromStream = (input: plugins.stream.Stream): Promise<string> => {
  const done = plugins.smartpromise.defer<string>();
  const hash = plugins.crypto.createHash('sha256');

  hash.setEncoding('hex');
  input.pipe(hash).pipe(helpers.hashStreamPipeStop(done.resolve));
  return done.promise;
};

/**
 * creates sha256 Hash from File;
 */
export const sha256FromFile = async (filePath: string): Promise<string> => {
  const absolutePath = plugins.path.resolve(filePath);
  const readableStream = plugins.fs.createReadStream(absolutePath);
  const hashResult = sha256FromStream(readableStream);
  return hashResult;
};

/**
 * Computes sha256 Hash from String synchronously
 */
export const sha256FromStringSync = (stringArg: string): string => {
  const hash = plugins.crypto.createHash('sha256');
  hash.update(stringArg);
  return hash.digest('hex');
};

/**
 * Computes sha256 Hash from String
 */
export const sha256FromString = async (stringArg: string): Promise<string> => {
  const hash = plugins.crypto.createHash('sha256');
  hash.update(stringArg);
  const hashResult = hash.digest('hex');
  return hashResult;
};

/**
 * computes sha265 Hash from Object
 */
export const sha265FromObject = async (objectArg: any): Promise<string> => {
  const stringifiedObject = plugins.smartjson.stringify(objectArg, {});
  const hashResult = await sha256FromString(stringifiedObject);
  return hashResult;
};

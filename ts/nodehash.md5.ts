import * as plugins from './nodehash.plugins';

export const md5FromString = async (stringToHash: string) => {
  return plugins.crypto.createHash('md5').update(stringToHash).digest("hex");
};

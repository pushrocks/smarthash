import { tap, expect } from '@pushrocks/tapbundle';
import fs = require('fs');

import * as nodehash from '../ts/index';

tap.test('sha256FromStringSync should convert a String to sha256 hash synchronously', async () => {
  let testHash = nodehash.sha256FromStringSync('test');
  let testHash2 = nodehash.sha256FromStringSync('testString');
  let testHash3 = nodehash.sha256FromStringSync('test');
  expect(testHash).to.equal(testHash3);
  expect(testHash).to.not.equal('test');
});

tap.test('sha256fromStringSync should convert a String to sha256 hash synchronously', async () => {
  const resultString = await nodehash.sha256FromString('test');
  let compareString = nodehash.sha256FromStringSync('test');
  expect(resultString).to.equal(compareString);
});

tap.test('sha256fromStream should convert a Stream to sha256', async tools => {
  let readStream = fs.createReadStream('./test/testImageForHash.jpg');
  const resultString: string = await nodehash.sha256FromStream(readStream);
  expect(resultString).to.equal('45b80413ed93acb495691186ce61850449439f9183352b9bff96d5533fa1046c');
});

tap.test('sha256fromFile should convert a Stream to sha256', async () => {
  const resultString = await nodehash.sha256FromFile('./test/testImageForHash.jpg');
  expect(resultString).to.equal('45b80413ed93acb495691186ce61850449439f9183352b9bff96d5533fa1046c');
});

tap.start();

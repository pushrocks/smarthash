import { tap, expect } from '@pushrocks/tapbundle';
import fs = require('fs');

import * as smarthash from '../ts/index';

tap.test('sha256FromStringSync should convert a String to sha256 hash synchronously', async () => {
  const testHash = smarthash.sha256FromStringSync('test');
  const testHash2 = smarthash.sha256FromStringSync('testString');
  const testHash3 = smarthash.sha256FromStringSync('test');
  expect(testHash).to.equal(testHash3);
  expect(testHash).to.not.equal('test');
});

tap.test('sha256fromStringSync should convert a String to sha256 hash synchronously', async () => {
  const resultString = await smarthash.sha256FromString('test');
  const compareString = smarthash.sha256FromStringSync('test');
  expect(resultString).to.equal(compareString);
});

tap.test('sha256fromStream should convert a Stream to sha256', async tools => {
  const readStream = fs.createReadStream('./test/testImageForHash.jpg');
  const resultString: string = await smarthash.sha256FromStream(readStream);
  expect(resultString).to.equal('45b80413ed93acb495691186ce61850449439f9183352b9bff96d5533fa1046c');
});

tap.test('sha256fromFile should convert a Stream to sha256', async () => {
  const resultString = await smarthash.sha256FromFile('./test/testImageForHash.jpg');
  expect(resultString).to.equal('45b80413ed93acb495691186ce61850449439f9183352b9bff96d5533fa1046c');
});

tap.test('should produce reproducible hash from Object', async () => {
  const hash1 = await smarthash.sha265FromObject({
    'hithere': 1,
    'wow': 'two'
  });

  const hash2 = await smarthash.sha265FromObject({
    'wow': 'two',
    'hithere': 1,
  });

  const hash3 = await smarthash.sha265FromObject({
    'wow': 'twoe',
    'hithere': 1,
  });
  expect(hash1).to.equal(hash2);
  expect(hash1).to.not.equal(hash3);
});

tap.test('should create md5hash from string', async () => {
  const md5Hash = await smarthash.md5FromString('hellothere');
  expect(md5Hash).to.equal('c6f7c372641dd25e0fddf0215375561f');
});

tap.start();

# @pushrocks/smarthash
simplified access to node hash functions

## Availabililty and Links
* [npmjs.org (npm package)](https://www.npmjs.com/package/@pushrocks/smarthash)
* [gitlab.com (source)](https://gitlab.com/pushrocks/smarthash)
* [github.com (source mirror)](https://github.com/pushrocks/smarthash)
* [docs (typedoc)](https://pushrocks.gitlab.io/smarthash/)

## Status for master
[![build status](https://gitlab.com/pushrocks/smarthash/badges/master/build.svg)](https://gitlab.com/pushrocks/smarthash/commits/master)
[![coverage report](https://gitlab.com/pushrocks/smarthash/badges/master/coverage.svg)](https://gitlab.com/pushrocks/smarthash/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/@pushrocks/smarthash.svg)](https://www.npmjs.com/package/@pushrocks/smarthash)
[![Known Vulnerabilities](https://snyk.io/test/npm/@pushrocks/smarthash/badge.svg)](https://snyk.io/test/npm/@pushrocks/smarthash)
[![TypeScript](https://img.shields.io/badge/TypeScript->=%203.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%2010.x.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage

We recommend the use of TypeScript for best in class intellisense.

```typescript
import * as nodehash from "nodehash";

// from stream
let readStream = fs.createReadStream("./somefile.txt")
nodehash.sha256FromStream(readStream)
    .then((resultString){
        console.log(resultString); // prints hash of the file
    });

// from file
nodehash.sha256FromFile("./somefile.txt")
    .then((resultString){
        console.log(resultString); // prints hash of the file
    });

// from string
nodehash.sha256FromString("some weird random string")
    .then((resultString){
        console.log(resultString); // prints hash of the file
    });

let hashString = nodehash.sha256FromStringSync("some weird random string");
```

For further information read the linked docs at the top of this readme.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy.html)

[![repo-footer](https://pushrocks.gitlab.io/assets/repo-footer.svg)](https://maintainedby.lossless.com)

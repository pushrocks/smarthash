# @pushrocks/smarthash
simplifies access to node hash functions

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
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)](https://prettier.io/)

## Usage

We recommend the use of TypeScript for best in class intellisense.

```typescript
import * as smarthash from "smarthash";

// ======
// sha265
// ======

// from stream
let readStream = fs.createReadStream("./somefile.txt")
smarthash.sha256FromStream(readStream)
    .then((resultString){
        console.log(resultString); // prints hash of the file
    });

// from file
smarthash.sha256FromFile("./somefile.txt")
    .then((resultString){
        console.log(resultString); // prints hash of the file
    });

// from string
smarthash.sha256FromString("some weird random string")
    .then((resultString){
        console.log(resultString); // prints hash of the file
    });

let hashString = smarthash.sha256FromStringSync("some weird random string");

// ===
// md5
// ===
smarthash.md5FromString('hellothere').then(md5String = {
    // do something with it here
})
```

## Contribution

We are always happy for code contributions. If you are not the code contributing type that is ok. Still, maintaining Open Source repositories takes considerable time and thought. If you like the quality of what we do and our modules are useful to you we would appreciate a little monthly contribution: You can [contribute one time](https://lossless.link/contribute-onetime) or [contribute monthly](https://lossless.link/contribute). :)

For further information read the linked docs at the top of this readme.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy)

[![repo-footer](https://lossless.gitlab.io/publicrelations/repofooter.svg)](https://maintainedby.lossless.com)

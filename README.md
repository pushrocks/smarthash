# nodehash

simplifies access to node hash functions. TypeScript Ready

## Status

[![build status](https://gitlab.com/pushrocks/nodehash/badges/master/build.svg)](https://gitlab.com/pushrocks/nodehash/commits/master)

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

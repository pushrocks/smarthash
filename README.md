# nodehash
simplifies access to node hash functions. TypeScript Ready

## Status
[![build status](https://gitlab.com/pushrocks/nodehash/badges/master/build.svg)](https://gitlab.com/pushrocks/nodehash/commits/master)

## Usage
We recommend the use of TypeScript for best in class intellisense.

```typescript
import * as nodehash from "nodehash";

let sha256 = new nodehash.sha256();
let myHashedString = sha256.fromString();
```
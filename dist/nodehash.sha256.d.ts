/// <reference types="q" />
import * as plugins from "./nodehash.plugins";
/**
 * creates sha256 Hash from Stream
 */
export declare let sha256FromStream: (input: any) => plugins.q.Promise<{}>;
/**
 * creates sha256 Hash from File;
 */
export declare let sha256FromFile: (filePath: string) => plugins.q.Promise<{}>;
/**
 * Computes sha256 Hash from String synchronously
 */
export declare let sha256FromStringSync: (stringArg: any) => any;
/**
 * Computes sha256 Hash from String
 */
export declare let sha256FromString: (stringArg: any) => plugins.q.Promise<{}>;

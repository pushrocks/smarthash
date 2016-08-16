import * as plugins from "./nodehash.plugins";

export let hashStreamPipeStop = (resolveFuntion) => {
    let forEach = (chunk:Buffer,enc,cb) => {
        resolveFuntion(chunk.toString("utf8"));
        cb(null,chunk);
    };

    let atEnd = (cb) => {
        cb();
    };
    
    return plugins.through2(forEach,atEnd);
};


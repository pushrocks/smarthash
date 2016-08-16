"use strict";
const plugins = require("./nodehash.plugins");
exports.hashStreamPipeStop = (resolveFuntion) => {
    let forEach = (chunk, enc, cb) => {
        resolveFuntion(chunk.toString("utf8"));
        cb(null, chunk);
    };
    let atEnd = (cb) => {
        cb();
    };
    return plugins.through2(forEach, atEnd);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZWhhc2guaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL25vZGVoYXNoLmhlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQVksT0FBTyxXQUFNLG9CQUFvQixDQUFDLENBQUE7QUFFbkMsMEJBQWtCLEdBQUcsQ0FBQyxjQUFjO0lBQzNDLElBQUksT0FBTyxHQUFHLENBQUMsS0FBWSxFQUFDLEdBQUcsRUFBQyxFQUFFO1FBQzlCLGNBQWMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDdkMsRUFBRSxDQUFDLElBQUksRUFBQyxLQUFLLENBQUMsQ0FBQztJQUNuQixDQUFDLENBQUM7SUFFRixJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7UUFDWCxFQUFFLEVBQUUsQ0FBQztJQUNULENBQUMsQ0FBQztJQUVGLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBQyxLQUFLLENBQUMsQ0FBQztBQUMzQyxDQUFDLENBQUMifQ==
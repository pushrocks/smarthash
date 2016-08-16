"use strict";
const plugins = require("./nodehash.plugins");
const helpers = require("./nodehash.helpers");
/**
 * creates sha256 Hash from Stream
 */
exports.sha256FromStream = (input) => {
    let done = plugins.q.defer();
    let hash = plugins.crypto.createHash('sha256');
    hash["setEncoding"]("hex");
    input
        .pipe(hash)
        .pipe(helpers.hashStreamPipeStop(done.resolve));
    return done.promise;
};
/**
 * creates sha256 Hash from File;
 */
exports.sha256FromFile = (filePath) => {
    let done = plugins.q.defer();
    let absolutePath = plugins.path.resolve(filePath);
    let readableStream = plugins.fs.createReadStream(absolutePath);
    exports.sha256FromStream(readableStream)
        .then((resultHashString) => {
        done.resolve(resultHashString);
    });
    return done.promise;
};
/**
 * Computes sha256 Hash from String synchronously
 */
exports.sha256FromStringSync = (stringArg) => {
    let hash = plugins.crypto.createHash('sha256');
    hash.update(stringArg);
    return hash.digest("hex");
};
/**
 * Computes sha256 Hash from String
 */
exports.sha256FromString = (stringArg) => {
    let done = plugins.q.defer();
    let hash = plugins.crypto.createHash('sha256');
    hash.update(stringArg);
    let hashResult = hash.digest("hex");
    done.resolve(hashResult);
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZWhhc2guc2hhMjU2LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvbm9kZWhhc2guc2hhMjU2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFZLE9BQU8sV0FBTSxvQkFBb0IsQ0FBQyxDQUFBO0FBQzlDLE1BQVksT0FBTyxXQUFNLG9CQUFvQixDQUFDLENBQUE7QUFFOUM7O0dBRUc7QUFDUSx3QkFBZ0IsR0FBRyxDQUFDLEtBQUs7SUFDaEMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUUvQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsS0FBSztTQUNBLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDVixJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3BELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQUVGOztHQUVHO0FBQ1Esc0JBQWMsR0FBRyxDQUFDLFFBQWU7SUFDeEMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxJQUFJLGNBQWMsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9ELHdCQUFnQixDQUFDLGNBQWMsQ0FBQztTQUMzQixJQUFJLENBQUMsQ0FBQyxnQkFBZ0I7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDeEIsQ0FBQyxDQUFBO0FBRUQ7O0dBRUc7QUFDUSw0QkFBb0IsR0FBRyxDQUFDLFNBQVM7SUFDeEMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM5QixDQUFDLENBQUM7QUFFRjs7R0FFRztBQUNRLHdCQUFnQixHQUFHLENBQUMsU0FBUztJQUNwQyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3hCLENBQUMsQ0FBQyJ9
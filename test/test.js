"use strict";
require("typings-test");
const should = require("should");
const fs = require("fs");
const nodehash = require("../dist/index");
describe("nodehash", function () {
    describe("sha256FromStringSync", function () {
        it("should convert a String to sha256 hash synchronously", function () {
            let testHash = nodehash.sha256FromStringSync("test");
            let testHash2 = nodehash.sha256FromStringSync("testString");
            let testHash3 = nodehash.sha256FromStringSync("test");
            should.equal(testHash, testHash3);
            should.notEqual(testHash, "test");
        });
    });
    describe("sha256fromStringSync", function () {
        it("should convert a String to sha256 hash synchronously", function (done) {
            nodehash.sha256FromString("test")
                .then(resultString => {
                let compareString = nodehash.sha256FromStringSync("test");
                should.equal(resultString, compareString);
                done();
            });
        });
    });
    describe("sha256fromStream", function () {
        it("should convert a Stream to sha256 and resolve a promise with result", function (done) {
            let readStream = fs.createReadStream("./test/testImageForHash.jpg");
            nodehash.sha256FromStream(readStream)
                .then((resultString) => {
                should.equal(resultString, "45b80413ed93acb495691186ce61850449439f9183352b9bff96d5533fa1046c");
                done();
            });
        });
    });
    describe("sha256fromFile", function () {
        it("should convert a Stream to sha256 and resolve a promise with result", function (done) {
            nodehash.sha256FromFile("./test/testImageForHash.jpg")
                .then((resultString) => {
                should.equal(resultString, "45b80413ed93acb495691186ce61850449439f9183352b9bff96d5533fa1046c");
                done();
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sY0FBYyxDQUFDLENBQUE7QUFDdEIsTUFBTyxNQUFNLFdBQVcsUUFBUSxDQUFDLENBQUM7QUFDbEMsTUFBTyxFQUFFLFdBQVcsSUFBSSxDQUFDLENBQUM7QUFFMUIsTUFBWSxRQUFRLFdBQU0sZUFBZSxDQUFDLENBQUE7QUFFMUMsUUFBUSxDQUFDLFVBQVUsRUFBQztJQUNoQixRQUFRLENBQUMsc0JBQXNCLEVBQUM7UUFDNUIsRUFBRSxDQUFDLHNEQUFzRCxFQUFDO1lBQ3RELElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyRCxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDNUQsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RELE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUM7SUFDSCxRQUFRLENBQUMsc0JBQXNCLEVBQUM7UUFDNUIsRUFBRSxDQUFDLHNEQUFzRCxFQUFDLFVBQVMsSUFBSTtZQUNuRSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO2lCQUM1QixJQUFJLENBQUMsWUFBWTtnQkFDZCxJQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzFELE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUN6QyxJQUFJLEVBQUUsQ0FBQztZQUNYLENBQUMsQ0FBQyxDQUFBO1FBQ1YsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQztJQUNILFFBQVEsQ0FBQyxrQkFBa0IsRUFBQztRQUN4QixFQUFFLENBQUMscUVBQXFFLEVBQUMsVUFBUyxJQUFJO1lBQ2xGLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1lBQ3BFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUM7aUJBQ2hDLElBQUksQ0FBQyxDQUFDLFlBQW1CO2dCQUN0QixNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBQyxrRUFBa0UsQ0FBQyxDQUFBO2dCQUM3RixJQUFJLEVBQUUsQ0FBQztZQUNYLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQztJQUNILFFBQVEsQ0FBQyxnQkFBZ0IsRUFBQztRQUN0QixFQUFFLENBQUMscUVBQXFFLEVBQUMsVUFBUyxJQUFJO1lBQ2xGLFFBQVEsQ0FBQyxjQUFjLENBQUMsNkJBQTZCLENBQUM7aUJBQ2pELElBQUksQ0FBQyxDQUFDLFlBQW1CO2dCQUN0QixNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBQyxrRUFBa0UsQ0FBQyxDQUFBO2dCQUM3RixJQUFJLEVBQUUsQ0FBQztZQUNYLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=
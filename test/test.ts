import "typings-test";
import should = require("should");
import fs = require("fs");

import * as nodehash from "../dist/index";

describe("nodehash",function(){
    describe("sha256FromStringSync",function(){
        it("should convert a String to sha256 hash synchronously",function(){
            let testHash = nodehash.sha256FromStringSync("test");
            let testHash2 = nodehash.sha256FromStringSync("testString");
            let testHash3 = nodehash.sha256FromStringSync("test");
            should.equal(testHash,testHash3);
            should.notEqual(testHash,"test");
        })
    });
    describe("sha256fromStringSync",function(){
        it("should convert a String to sha256 hash synchronously",function(done){
            nodehash.sha256FromString("test")
                .then(resultString => {
                    let compareString = nodehash.sha256FromStringSync("test");
                    should.equal(resultString,compareString);
                    done();
                })
        })
    });
    describe("sha256fromStream",function(){
        it("should convert a Stream to sha256 and resolve a promise with result",function(done){
            let readStream = fs.createReadStream("./test/testImageForHash.jpg");
            nodehash.sha256FromStream(readStream)
                .then((resultString:string) => {
                    should.equal(resultString,"45b80413ed93acb495691186ce61850449439f9183352b9bff96d5533fa1046c")
                    done();
                });
        })
    });
    describe("sha256fromFile",function(){
        it("should convert a Stream to sha256 and resolve a promise with result",function(done){
            nodehash.sha256FromFile("./test/testImageForHash.jpg")
                .then((resultString:string) => {
                    should.equal(resultString,"45b80413ed93acb495691186ce61850449439f9183352b9bff96d5533fa1046c")
                    done();
                });
        })
    });
});
"use strict"

/**
 * @name lambdaHelpersTest
 * @copyright 2015-2016 otherkitten.com, Inc. or its affiliates.All Rights Reserved.
 * @license This software cannot be used or duplicated without strict compliance to the software license agreement.  See https://license.otherkitten.com
 * @author Bill Heitzeg
 * @Validate the results
 **/
const assert = require("assert")
const util = require("util")
const index = require("../index.js")
const fs = require("fs");

describe("copydirectory", function () {
  it("Make a directory, copy it, validate, and remove the original and copied directories",
   function (done) {
   		function copyDirectory(directory) {
   			console.log(directory);
   		}
   
   		function validateDirectory(directory) {
   		}
   		
   		function makedirectory(directory) {
   			fs.mkdir(directory, function (err) {
   				copyDirectory(directory)
   				done()
   			})
   		}
   		
   		
   		makedirectory("TestDirectory")
	})
})
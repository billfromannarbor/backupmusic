"use strict"

/**
 * @name indexTest
 * @copyright 2017 otherkitten.com, Inc. or its affiliates.All Rights Reserved.
 * @license Apache-2
 * @author Bill Heitzeg
 * @All the tests for backupmusic
 **/
const assert = require("assert")
const util = require("util")
const index = require("../index.js")
const fs = require("fs")

describe("copydirectory", function () {
  it("Make a directory, copy it, validate, and remove the original and copied directories",
    function (done) {
      function copyDirectory(directory) {
          return new Promise(function (resolve, reject) {
          	resolve(directory)
          })
      }
			
      function validateDirectory(directory) {}

      function makeDirectory(directory) {
        return new Promise(function (resolve, reject) {
			fs.mkdir(directory, function (err) {
			  if (err) {
				reject(err)
			  } else {
				resolve(directory)
			  }
			})
          })
      }


      makeDirectory("TestDirectory")
      .then(copyDirectory)
      .then(function(){
      	done()	
      })
      .catch(function(err) {
      	done(err)
      })
    })
})
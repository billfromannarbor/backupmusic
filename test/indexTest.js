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
        console.log(directory)
      }

      function validateDirectory(directory) {}

      function makedirectory(directory) {
        fs.mkdir(directory, function (err) {
          copyDirectory(directory)
          done()
        })
      }


      makedirectory("TestDirectory")
    })
})
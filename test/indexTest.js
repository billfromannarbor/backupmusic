"use strict"


/**
 * @name indexTest
 * @copyright 2017 otherkitten.com, Inc. or its affiliates.All Rights Reserved.
 * @license Apache-2
 * @author Bill Heitzeg
 * @All the tests for backupmusic
 **/
const assert = require("assert")
const fsp = require("fs-promise")

const index = require("../index.js").api


var testBackupConfig = {}
testBackupConfig.sourceDirectory = "TestSourceDirectory"
testBackupConfig.destinationDirectory = "TestDestinationDirectory"
testBackupConfig.filter = {}
testBackupConfig.filter.acceptFiles = [".mp3", ".m4u"]

it("File System Promise example", function (done) {
  var fsp = require("fs-promise")

  fsp.writeFile("/tmp/hello1.txt", "hello world")
    .then(function () {
      return fsp.readFile("/tmp/hello1.txt", {
        encoding: "utf8"
      })
    })
    .then(function (contents) {
      console.log(contents)
      done()
    })
})
/**
 * @name indexTest
 * @copyright 2017 otherkitten.com, Inc. or its affiliates.All Rights Reserved.
 * @license Apache-2
 * @author Bill Heitzeg
 * @All the tests for backupmusic
 **/

"use strict"
const assert = require("assert")
const fsp = require("fs-promise")
const walk = require("walk-folder-tree")

const index = require("../index.js").api

var testBackupConfig = {}
testBackupConfig.sourceDirectory = "mymusic"
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

it("Walks Tree Folder Promise Example", function (done) {
  walk(testBackupConfig.sourceDirectory, function (params, cb) {
    console.log("Found file: ", params.path)
    cb()
  }).then(function () {
    done()
  }).catch(function (err) {
    done(err)
  })
})

//TODO:  Pull a directory tree of the source and destinationDirectory
//TODO:  Then create a diff of the two (include files in the destination that are out of date)
//TODO:  Then, from the diff create a list of files to copy (filter here for file types)
//TODO:  Then copy all files asynchronously
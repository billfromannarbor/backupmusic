"use strict"

/**
 * @name indexTest
 * @copyright 2017 otherkitten.com, Inc. or its affiliates.All Rights Reserved.
 * @license Apache-2
 * @author Bill Heitzeg
 * @All the tests for backupmusic
 **/
const assert = require("assert")
const index = require("../index.js").api
const fs = require("fs")
var testBackupConfig = {}
testBackupConfig.sourceDirectory = "TestSourceDirectory"
testBackupConfig.destinationDirectory = "TestDestinationDirectory"
testBackupConfig.filter = {}
testBackupConfig.filter.acceptFiles = [".mp3", ".m4u"]

function createInitialSetup(backupConfig) {
  return new Promise(function (resolve, reject) {
    resolve(backupConfig)
  })
}

function validateBackup(backupConfig) {
  return new Promise(function (resolve, reject) {
    resolve(backupConfig)
  })
}

function removeTestArtifacts(backupConfig) {
  return new Promise(function (resolve, reject) {
    resolve(backupConfig)
  })
}

it.skip("Make a directory, copy it, validate, and remove the original and copied directories", function () {
  it("Does it all right now",
    function (done) {
      createInitialSetup(testBackupConfig)
        .then(index.backupDirectory)
        .then(validateBackup)
        .then(removeTestArtifacts)
        .then(function () {
          done()
        })
        .catch(function (err) {
          done(err)
        })
    })
})

it.skip("retrieves a directory/file tree", function testRetrieveDirectoryTree(done) {
  //make a directory
  //     const dirs = p => fs.readdirSync(p).filter(f => fs.statSync(p + "/" + f).isDirectory())
  //     const files = p => fs.readdirSync(p).filter(f => fs.statSync(p + "/" + f).isDirectory()).readdirSync().isFile()
  //     console.log("directories: " + dirs("."))
  //     console.log("directories: " + files("."))
  createInitialSetup(testBackupConfig)
    .then(index.getDirectoryTreeWithBackupConfig)
    .then(function validate(directoryTree) {
      return new Promise(function (resolve, reject) {
        console.log(directoryTree)
        resolve(testBackupConfig)
      })
    })
    .then(removeTestArtifacts)
    .then(function () {
      done()
    })
    .catch(function (err) {
      done(err)
    })
})

it("OKfs.stat - Retrieve information about a file in json format", function testStat() {

})
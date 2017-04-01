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
const okfs = require("../index.js").okfs
const fs = require("fs")
var testBackupConfig = {}
testBackupConfig.sourceDirectory = "TestSourceDirectory"
testBackupConfig.destinationDirectory = "TestDestinationDirectory"
testBackupConfig.filter = {}
testBackupConfig.filter.acceptFiles = [".mp3", ".m4u"]

it("okfs.copyFile - copy a source file to a destination file", function (done) {
  const source = "./mymusic/child2/nothing.txt"
  const destination = "./destinationMusic/."
  okfs.copyFile(source, destination)
    .then(function (source) {
      done()
    })
    .catch(function (err) {
      done(err)

    })
})

it("okfs.copyFile - Fails by trying to copy a source file that doesn't exist", function (done) {
  const source = "./mymusic/child3/nothing.txt"
  const destination = "./destinationMusic/."
  okfs.copyFile(source, destination)
    .then(function (source) {
      done(new Error("Should fail to copy an empty directory from " + "sourceDirectory: " + source))
    })
    .catch(function (err) {
      done()
    })
})

it.skip("okfs.copyFile - Fails to copy an already existing file", function (done) {
  const source = "./mymusic/child1/nothing.txt"
  const destination = "./mymusic/child2/nothing.txt"
  okfs.copyFile(source, destination)
    .then(function (sourceDirectory) {
      done(new Error("Should fail to copy an already existing file from " + "source: " + source))
    })
    .catch(function (err) {
      done()
    })
})

it("okfs.md - Fails with empty directory variable", function (done) {
  okfs.mkdir()
    .then(function (dir) {
      done(new Error("Should fail with empty directory variable"))
    })
    .catch(function (err) {
      done()
    })

})

it("okfs.md - Fails to make a directory that already exists", function (done) {
  okfs.mkdir("./mymusic")
    .then(function (dir) {
      done(new Error("Directory : " + dir + " Should exist"))
    })
    .catch(function (err) {
      done()
    })

})

it("okfs.md - Make a new directory that doesn't exit", function (done) {
  okfs.mkdir("nonexistentDirectorymkdir")
    .then(function (dir) {
      done()
    })
    .catch(function (err) {
      done(err)
    })
})

it("okfs.md - Fail to make a directory that does exist", function (done) {
  done()
})


it("okfs.md - Fail when an empty directory variable is passed in", function (done) {
  done()
})



it("okfs.stat - Gets Info from a non-existent directory", function (done) {
  okfs.stat("nonexistentDirectorystat")
    .then(function (stats) {
      done(new Error("Directory Should not exist"))
    })
    .catch(function (err) {
      done()
    })
})

it("okfs.stat - Gets Info from an existing directory", function (done) {
  okfs.stat("./mymusic")
    .then(function (stats) {
      done()
    })
    .catch(function (err) {
      done(new Error("Directory Should exist"))
    })
})

it("okfs.stat - Gets Info from an empty passed in directory", function (done) {
  okfs.stat()
    .then(function (stats) {
      done(new Error("Function should fail"))
    })
    .catch(function (err) {
      done()

    })
})

it.skip("Sets up and tears down the environment", function (done) {
  createInitialSetup(testBackupConfig)
    .then(function validateThatArtifactsWereCreated(backupConfig) {
      okfs.stat(testBackupConfig.sourceDirectory)
        .then(function checkIfSourceDirectoryExists(stats) {
          return new Promise(function (resolve, reject) {
            if (stats.isDirectory()) {
              console.log("stats: " + testBackupConfig)
              resolve(testBackupConfig)
            } else {
              //reject(new Error(testBackupConfig.sourceDirectory + " is not a directory"))
              console.log("Cool")
              resolve(testBackupConfig)
            }
          })
        })
        .catch(function (err) {
          reject(err)
        })
    })
    .then(removeTestArtifacts)
    //     .then(function validateThatArtifactsWereRemoved(backupConfig) {
    //       okfs.stat(backupConfig.sourceDirectory)
    //         .then(function checkIfSourceDirectoryExists(stats) {
    //           return new Promise(function (resolve, reject) {
    //             if (stats.isDirectory()) {
    //               reject(new Error(testBackupConfig.sourceDirectory + " is not a directory"))
    //             } else {
    //               resolve(testBackupConfig)
    //             }
    //           })
    //         })
    //     })
    .then(function finished() {
      done()
    })
    .catch(function (err) {
      done(err)
    })
})

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

it.skip("OKfs.stat - Retrieve information about a file in json format", function testStat(done) {
  createInitialSetup(testBackupConfig)
    .then(function statSourceDirectory(backupConfig) {
      return new Promise(function (resolve, reject) {
        okfs.stat(backupConfig.sourceDirectory)
          .then(function returnBackupConfig(stat) {
            resolve(backupConfig)
          })
          .catch(function (err) {
            console.log("Really more fuck you stuff")
            reject(err)
          })
      })
    })
    .then(function validateStat(fsstats) {
      done()
    })
    .catch(function (err) {
      done(err)
    })

})
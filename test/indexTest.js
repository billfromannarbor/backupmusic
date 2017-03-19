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

function createInitialSetup(backupConfig) {
  return new Promise(function (resolve, reject) {
    resolve(backupConfig)
  })
}

function validateBackup(backupConfig) {
  return new Promise(function (resolve, reject) {
    console.log("validateBackup" + backupConfig)
    resolve(backupConfig)
  })
}

function removeTestArtifacts(backupConfig) {
  return new Promise(function (resolve, reject) {
    console.log("removeTestArtifacts: " + backupConfig)
    resolve(backupConfig)
  })
}


it("okfs.stat - Gets Info from a non-existent directory", function (done) {
  okfs.stat("nonexistentDirectory")
    .then(function (stats) {
      done(new Error("Directory Should not exist"))
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
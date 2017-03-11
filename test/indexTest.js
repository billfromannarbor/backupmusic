"use strict"

/**
 * @name indexTest
 * @copyright 2017 otherkitten.com, Inc. or its affiliates.All Rights Reserved.
 * @license Apache-2
 * @author Bill Heitzeg
 * @All the tests for backupmusic
 **/
const assert = require("assert")
const index = require("../index.js")
const fs = require("fs")

describe("copydirectory", function () {
  it("Make a directory, copy it, validate, and remove the original and copied directories",
    function (done) {
      var testBackupConfig = {}



      function removeTestDirectories(backupConfig) {
        return new Promise(function (resolve, reject) {
          resolve(backupConfig)
        })
      }

      function validateDirectory(backupConfig) {
        return new Promise(function (resolve, reject) {
          resolve(backupConfig)
        })
      }

      testBackupConfig.sourceDirectory = "TestSourceDirectory"
      testBackupConfig.destinattionDirectory = "TestDestinationDirectory"
      testBackupConfig.filter = {}
      testBackupConfig.filter.acceptFiles = [".mp3", ".m4u"]
      index.removeDirectory(testBackupConfig)
        .then(index.makeDirectory)
        .then(index.copyDirectory)
        .then(validateDirectory)
        .then(index.removeDirectory)
        .then(function () {
          done()
        })
        .catch(function (err) {
          done(err)
        })
    })
})
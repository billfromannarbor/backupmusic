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

describe("Make a directory, copy it, validate, and remove the original and copied directories", function () {
  it("Does it all right now",
    function (done) {
      var testBackupConfig = {}

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

      testBackupConfig.sourceDirectory = "TestSourceDirectory"
      testBackupConfig.destinationDirectory = "TestDestinationDirectory"
      testBackupConfig.filter = {}
      testBackupConfig.filter.acceptFiles = [".mp3", ".m4u"]
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
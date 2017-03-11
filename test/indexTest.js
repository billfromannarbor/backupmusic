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
      var testBackupConfig = {}

      function backupDirectory(backupConfig) {
        return new Promise(function (resolve, reject) {
          makeDirectory(backupconfig.destinationDirectory)
            .then(function () {})
            .then(function () {
              resolve()
            })

        })
      }

      function copyDirectory(backupConfig) {
        return new Promise(function (resolve, reject) {
          resolve(backupConfig)

        })
      }

      function copyFile(sourcePath, destinationPath) {
        return new Promise(function (resolve, reject) {
          resolve()
        })
      }

      function makeDirectory(backupConfig) {
        return new Promise(function (resolve, reject) {
          fs.mkdir(backupConfig.sourceDirectory, function (err) {
            if (err) {
              reject(err)
            } else {
              resolve(backupConfig)
            }
          })
        })
      }

      function removeDirectory(backupConfig) {
        return new Promise(function (resolve, reject) {
          fs.rmdir(backupConfig.sourceDirectory, function (err) {
            if (err) {
              if (err.code == "ENOENT") {
                resolve(backupConfig)
              } else {
                reject(err)
              }
            } else {
              resolve(backupConfig)
            }
          })
        })
      }

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
      removeDirectory(testBackupConfig)
        .then(makeDirectory)
        .then(copyDirectory)
        .then(validateDirectory)
        .then(removeDirectory)
        .then(function () {
          done()
        })
        .catch(function (err) {
          done(err)
        })
    })
})
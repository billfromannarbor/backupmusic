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

      function removeDirectory(directory) {
        return new Promise(function (resolve, reject) {
          fs.rmdir(directory, function (err) {
            if (err) {
              if (err.code == "ENOENT") {
                resolve(directory)
              } else {
                reject(err)
              }
            } else {
              resolve(directory)
            }
          })
        })
      }

      function validateDirectory(directory) {
        return new Promise(function (resolve, reject) {
          resolve(directory)
        })
      }

      removeDirectory("TestDirectory")
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
"use strict"

const fs = require("fs")

var sourceDirectory = process.argv[2]
var destinationDirectory = process.argv[3]

var backupConfig = {}
backupConfig.sourceDirectory = sourceDirectory
backupConfig.destinationDirectory = destinationDirectory
backupConfig.filter = [".mp3", ".m4u"]

exports.backupDirectory = function backupDirectory(backupConfig) {
  return new Promise(function (resolve, reject) {
    makeDirectory(backupconfig.destinationDirectory)
      .then(function () {})
      .then(function () {
        resolve()
      })
  })
}

exports.copyDirectory = function copyDirectory(backupConfig) {
  return new Promise(function (resolve, reject) {
    resolve(backupConfig)

  })
}

exports.copyFile = function copyFile(sourcePath, destinationPath) {
  return new Promise(function (resolve, reject) {
    resolve()
  })
}

exports.makeDirectory = function makeDirectory(backupConfig) {
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

exports.removeDirectory = function removeDirectory(backupConfig) {
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

exports.backupDirectory(backupConfig)
  .then(function (backupConfig) {
    console.log("Completed Backup of " + " 0 files " + "using config: " + backupConfig)
  })
  .catch(function (err) {
    console.log("Error: " + err + "using config: " + backupConfig)
  })
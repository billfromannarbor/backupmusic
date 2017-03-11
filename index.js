"use strict"

const fs = require("fs")

var api = {}
exports.api = api

function main() {
  var sourceDirectory = process.argv[2]
  var destinationDirectory = process.argv[3]
  var backupConfig = {}
  if (sourceDirectory && destinationDirectory) {

    backupConfig.sourceDirectory = sourceDirectory
    backupConfig.destinationDirectory = destinationDirectory
    backupConfig.filter = [".mp3", ".m4u"]

    api.backupDirectory(backupConfig)
      .then(function (backupConfig) {
        console.log("Completed Backup of " + " 0 files " + "using config: " + backupConfig.sourceDirectory)
      })
      .catch(function (err) {
        console.log("Why: " + err + " using config: " + backupConfig.sourceDirectory)
      })
  }
}

main()


api.backupDirectory = function backupDirectory(backupConfig) {
  return new Promise(function (resolve, reject) {
    api.makeDirectory(backupConfig.destinationDirectory)
      .then(function () {
        resolve()
      })
      .catch(function (err) {
        reject(err)
      })
  })
}

api.copyDirectory = function copyDirectory(backupConfig) {
  return new Promise(function (resolve, reject) {
    resolve(backupConfig)

  })
}

api.copyFile = function copyFile(sourcePath, destinationPath) {
  return new Promise(function (resolve, reject) {
    resolve()
  })
}

api.makeDirectory = function makeDirectory(directory) {
  return new Promise(function (resolve, reject) {
    console.log("Make directory: " + directory)
    fs.mkdir(directory, function (err) {
      if (err) {
        if (err.code == "EEXIST") {
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

api.removeDirectory = function removeDirectory(backupConfig) {
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
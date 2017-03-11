"use strict"

const fs = require("fs")

var api = {}
api.backupDirectory = backupDirectory
api.copyDirectory = copyDirectory
api.copyBackupDirectory = copyBackupDirectory
api.copyDirectory = copyDirectory
api.copyFile = copyFile
api.makeDirectory = makeDirectory
api.removeDirectory = removeDirectory
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
        console.log("Error: " + err + " using config: " + backupConfig.sourceDirectory)
      })
  }
}

main()


function backupDirectory(backupConfig) {
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

function copyBackupDirectory(backupConfig) {
  return new Promise(function (resolve, reject) {
    resolve(backupConfig)

  })
}

function copyDirectory(sourcePath, destinationPath) {
  return new Promise(function (resolve, reject) {
    getFileList(sourceDirectory)
      .then(function (filelist) {
        copyFileList(sourcePath, destinationPath)
      })
      .then(resolve(backupConfig))
  })
}

function copyFile(sourcePath, destinationPath) {
  return new Promise(function (resolve, reject) {
    fs.createReadStream(sourcePath).pipe(fs.createWriteStream(destinationPath))
    resolve()
  })
}

function makeDirectory(directory) {
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
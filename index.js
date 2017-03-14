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
api.getDirectoryTree = getDirectoryTree
api.getDirectoryTree = getDirectoryTree
exports.api = api


function main() {
  var sourceDirectory = process.argv[2]
  var destinationDirectory = process.argv[3]
  var backupConfig = {}
  var message
  if (sourceDirectory && destinationDirectory) {

    backupConfig.sourceDirectory = sourceDirectory
    backupConfig.destinationDirectory = destinationDirectory
    backupConfig.filter = [".mp3", ".m4u"]

    api.backupDirectory(backupConfig)
      .then(function (backupConfig) {
        message = "Completed Backup of " + "0" + " files "
        message += " from " + backupConfig.sourceDirectory
        message += " to " + backupConfig.destinationDirectory
        console.log(message)
      })
      .catch(function (err) {
        console.log("Error: " + err + " using config: " + JSON.stringify(backupConfig.sourceDirectory))
      })
  } else {
    console.log("Usage: node index.js ./mymusic ./backupofmymusic")
  }
}

main()


function getDirectoryTree(directory) {
  resolve({})

}

function backupDirectory(backupConfig) {
  return new Promise(function (resolve, reject) {
    Promise.all([api.getDirectoryTree(backupConfig.sourceDirectory), api.getDirectoryTree(backupConfig.destinationDirectory)])
      .then(function (directoryTree) {
        console.log("Directory Tree: " + JSON.stringify(directoryTree))
        resolve(backupConfig)
      })

  })
}

function getDirectoryTree(directory) {
  return new Promise(function (resolve, reject) {
    var directoryTree = {}

    resolve(directoryTree)

  })
}

function copyBackupDirectory(backupConfig) {
  return new Promise(function (resolve, reject) {
    resolve(backupConfig)

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
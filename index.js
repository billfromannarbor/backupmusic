"use strict"

const fs = require("fs")

var okfs = {}

//setup api
/*
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
*/


//setup okfs
okfs.stat = stat
okfs.mkdir = mkdir
okfs.copyFile = copyFile
exports.okfs = okfs

function stat(file) {
  return new Promise(function (resolve, reject) {
    if (!file) {
      reject("file must be defined")
    }
    fs.stat(file, function (err, stats) {
      if (err) {
        reject(err)
      } else {
        resolve(stats)
      }
    })
  })
}

function backup(directory) {
  ofks.mkdir(directory)
    .catch(function (err) {
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
}

function mkdir(directory) {
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

function copyFile(sourceFile, destinationDirectory) {
  return new Promise(function (resolve, reject) {
    console.log("Dude 1")
    if (!sourceFile) {
      reject(new Error("sourceFile undefined"))
    }
    if (!destinationDirectory) {
      reject(new Error("destinationDirectory undefined"))
    }

    okfs.stat(sourceFile)
      .then(function sourceFileStats(stats) {
        if (!stats.isFile()) {
          reject(new Error("sourceFile: " + sourceFile + " is not a file"))
        }
        okfs.stat(destinationDirectory)
          .then(function destinationDirectoryStats(stats) {
            if (!stats.isDirectory()) {
              reject(new Error("destinationDirectory: " + sourceFile + " is not a directory"))
            }
            const writer = fs.createWriteStream(destinationPath)
            const reader = fs.createReadStream(sourcePath)
            if (!reader) {
              reject(new Error("Source does not exist"))
            }
            writer.on('pipe', (src) => {
              console.error('something is piping into the writer')
              if (src != reader) {
                reject(new Error("Source does not equal reader"))
              }
            })

            reader.pipe(writer)
            resolve()

          })
          .catch(function (err) {
            reject(err)
          })
      })
      .then(function () {
        console.log("Dude22")
        resolve()
      })
      .catch(function (err) {
        console.log("Dude Catch")
        reject(err)
      })
  })
}
/*
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
*/




/*
function backupDirectory(backupConfig) {
  return new Promise(function (resolve, reject) {
    Promise.all([api.getDirectoryTree(backupConfig.sourceDirectory), api.getDirectoryTree(backupConfig.destinationDirectory)])
      .then(function (directoryTree) {
        console.log("Directory Tree: " + JSON.stringify(directoryTree))
        resolve(backupConfig)
      })

  })
}

function getSourceDirectoryTreeUsingBackupConfig(backupConfig) {
  getDirectoryTree(backupConfig.sourceDirectory)
}

function getDirectoryTree(directory) {
  return new Promise(function (resolve, reject) {
    var directoryTree = {}
    fs.stat(directory, function (err, stats) {
      if (err) {
        reject(err)
      } else {
        if (stats.isDirectory()) {
          directoryTree.directory = ""
          //get directory list
        } else if (stat.isFile()) {
          directoryTree.file = ""

        }
        console.log("These are the stats: " + stats)
        resolve(directoryTree)
      }
    })
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
*/
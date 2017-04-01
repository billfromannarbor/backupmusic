"use strict"

const fs = require("fs")
const fsp = require("fs-promise")


//setup api

var api = {}
exports.api = api

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
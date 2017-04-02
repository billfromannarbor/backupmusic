"use strict"


function main() {
  var sourceDirectory = process.argv[2]
  var destinationDirectory = process.argv[3]
  var backupConfig = {}
  var message
  if (sourceDirectory && destinationDirectory) {
    console.log("Still a work in progress")
  } else {
    console.log("Usage: node index.js ./mymusic ./backupofmymusic")
  }
}

main()
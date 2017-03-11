"use strict"

const fs = require("fs")

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
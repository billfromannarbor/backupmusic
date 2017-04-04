/**
 * @name api
 * @copyright 2017 otherkitten.com, Inc. or its affiliates.All Rights Reserved.
 * @license Apache-2
 * @author Bill Heitzeg
 **/
"use strict"

const fs = require("fs")
const fsp = require("fs-promise")
const walk = require("walk-folder-tree")

exports.getDirectoryTree = function getDirectoryTree(tree, directory) {
  return new Promise(function (resolve, reject) {
    var newTree = tree
    walk(directory, {
      recurse: false
    }, function (params, callback) {
      if (params.directory) {
        //Add directory to tree
        newTree[directory] = {}
        exports.getDirectoryTree(newTree, params.fullPath)
          .then(function (returnedTree) {
            resolve(returnedTree)
          })
      } else {
        resolve(newTree)
      }
    }).then(function (returnThisTree) {
      resolve(returnThisTree)
    }).catch(function (err) {
      reject(err)
    })
  })

}
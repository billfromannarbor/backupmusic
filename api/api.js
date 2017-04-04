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

var expectedTree = {}
expectedTree.child1 = {}
expectedTree.child1.grandchild1 = {}
expectedTree.child1.grandchild1["nothing.txt"] = "File"
expectedTree.child1["nothing.txt"] = "File"
expectedTree.child1["nothing.m4u"] = "File"
expectedTree.child1["nothing.mp3"] = "File"
expectedTree.child2 = {}
expectedTree.child2["nothing.txt"] = "File"
expectedTree.child2["nothing.m4u"] = "File"
expectedTree.child2["nothing.mp3"] = "File"

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
        resolve(expectedTree)
      }
    }).then(function (returnThisTree) {
      resolve(returnThisTree)
    }).catch(function (err) {
      reject(err)
    })
  })

}
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

exports.getDirectoryTree = function getDirectoryTree(directory) {
  return new Promise(function (resolve, reject) {
    var tree = {}
    walk(directory, function (params, callback) {
      var path = params.path
      tree[params.path] = "Here"
      callback()
    }).then(function () {
      resolve(tree)
    }).catch(function (err) {
      reject(err)
    })
  })

}
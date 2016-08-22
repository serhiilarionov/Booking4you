'use strict';

var fs = require('fs'),
  path = require('path');

var mkdir = function (path) {
  try {
    fs.mkdirSync(path);
  } catch (e) {
    if (e.code != 'EEXIST') throw e;
  }
};

var mkdirSync = function (dirpath) {
  var parts = dirpath.split(path.sep);
  for (var i = 1; i <= parts.length; i++) {
    mkdir(path.join.apply(null, parts.slice(0, i)));
  }
};

module.exports = mkdirSync;
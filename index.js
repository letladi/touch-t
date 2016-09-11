#!/usr/bin/env node

'use strict';

let pkg = require('./package.json'),
    lib = require('./lib'),
    touch = lib.touch,
    timestamper = new lib.Timestamper(),
    fileNames = process.argv.slice(2);

if (fileNames.length === 0) {
  return console.log('Please enter a file name(s) you would like to create');
}

let stampedFileNames = timestamper.stampedNames(...fileNames);
stampedFileNames = (typeof stampedFileNames === 'string') ? [stampedFileNames] : stampedFileNames;
stampedFileNames.forEach(touch);

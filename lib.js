"use strict";

let fs = require("fs");

module.exports.Timestamper = class Timestamper {
  timestamp(date) {
    date = date || new Date();
    let yr, month, day, hr, min, sec;
    [, yr, month, day, hr, min, sec] = date
      .toJSON()
      .match(/(\d{4})-(\d+)-(\d+)T(\d+):(\d+):(\d+).*/);
    return [yr, month, day, hr, min, sec].join("");
  }

  stampedNames(...fileNames) {
    if (fileNames.length === 1) {
      return `${this.timestamp()}_${fileNames[0]}`;
    } else {
      fileNames = fileNames.map((fileName, i) => {
        return `${this.timestamp()}_${i + 1}_${fileName}`;
      });
      return fileNames;
    }
  }
};

module.exports.touch = (fileName) => {
  fs.writeFileSync(fileName, "");
};

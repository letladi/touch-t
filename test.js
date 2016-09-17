'use strict';

let lib = require('./lib'),
    Timestamper = lib.Timestamper,
    mocha = require('mocha'),
    should = require('should'),
    fs = require('fs');

describe("Timestamper", ()=> {
  describe("#timestamp", ()=> {
    it('should return a timestamp of the given date', ()=> {
      let timestamper = new Timestamper(),
          date1 = new Date('2016-11-11T12:19:37.000Z'),
          date2 = new Date('2016-05-11T12:19:37.000Z'),
          stampString1 = '20161111121937',
          stampString2 = '20160511121937';
      timestamper.timestamp(date1).should.equal(stampString1);
      timestamper.timestamp(date2).should.equal(stampString2);
    });
    it('should return a timestamp of the current date if a timestamp is not given', ()=> {
      let timestamp = new Timestamper();
      timestamp.timestamp().should.be.an.instanceOf(String).and.have.lengthOf(14);
    });
  });

  describe("#stampedNames", ()=> {
    it('should return a file name with a timestamp', ()=> {
      let timestamper = new Timestamper(),
        fileName = 'temp-file',
        stampedName = timestamper.stampedNames(fileName);
      (/^\d{14}\_\w+/.test(stampedName)).should.be.true();
    });
    it('should return an array of timestamped file names if given more than one name', ()=> {
      let timestamper = new Timestamper(),
          fileName1 = 'temp-file1',
          fileName2 = 'temp-file2',
          stampedNames = timestamper.stampedNames(fileName1, fileName2);
      stampedNames.should.be.an.instanceOf(Array);
      (stampedNames.length).should.be.exactly(2);
    });
    it('should return an array of files names with a timestamp and sequence if given an array of names', ()=> {
      let timestamper = new Timestamper(),
        fileNames = ['temp-file1', 'temp-file2'],
        stampedNames = timestamper.stampedNames(...fileNames);
      stampedNames.forEach((stampedName, i)=> {
        (new RegExp(`\\d{14}_${i+1}_${fileNames[i]}`)).test(stampedName).should.be.true();
      });
    });
  });
});

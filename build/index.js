"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//typedef file for fs is not their thats why getting the module not found error
// do npm install @types/node
const MatchResults_1 = require("./MatchResults");
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
// Create an object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in somethig satisfying 
// the DataReader interface 
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
//matchReader.matches
//console.log(matches) /// a 2D array is printed
let manUnitedWins = 0;
for (let match of matchReader.matches) {
    if (match[1] === "Man United" && match[5] === MatchResults_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[1] === "Man United" && match[5] === MatchResults_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man united won ${manUnitedWins} games`);

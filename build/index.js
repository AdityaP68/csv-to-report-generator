"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
// Create an object that satisfies the DataReader interface
// const csvFileReader = new CsvFileReader("football.csv");
// Create an instance of MatchReader and pass in somethig satisfying
// the DataReader interface
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport("Man United");
// const summary = new Summary(
//   new WinsAnalysis("Man United"),
//   new HtmlReport()
// );
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);

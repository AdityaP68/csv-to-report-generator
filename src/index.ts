//typedef file for fs is not their thats why getting the module not found error
// do npm install @types/node
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
import { HtmlReport } from "./reportTargets/HtmlReport";

// Create an object that satisfies the DataReader interface
// const csvFileReader = new CsvFileReader("football.csv");
// Create an instance of MatchReader and pass in somethig satisfying
// the DataReader interface
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.fromCsv('football.csv')
const summary = Summary.winsAnalysisWithHtmlReport("Man United");

// const summary = new Summary(
  //   new WinsAnalysis("Man United"),
  //   new HtmlReport()
  // );
  
  
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);

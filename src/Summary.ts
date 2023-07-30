import { MatchData } from "./MatchData";

// dont need to explicitly write export for interfaces
export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

// this class is kinda like a coordinator of sorts 
// deals with data handover does nothing else 
export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void{
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output)
  }
}

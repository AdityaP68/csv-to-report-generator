import { MatchResult } from "./MatchResults";
import { stringToDate } from "./utils";
import { MatchData } from "./MatchData";

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();

    this.matches = this.reader.data.map((row: string[]): MatchData => {
      // tupples can be used here as the order in row is fixed
      return [
        stringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        // type assertion --> ts will now conside the value to not
        // be a string and be one of the following values 'H, 'A', 'D'
        row[5] as MatchResult,
        row[6],
      ];
    });
  }
}

import fs from "fs";


// tuple declaration
export class CsvFileReader {
  data: string[][] = []; // says we are using arrays of arrays

  // if constructor defined like this it automatically creates a
  // field of filename with access modifier as public
  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      // : (Date | string | number | MatchResults) instead of any
  }
}

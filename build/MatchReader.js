"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("./utils");
class MatchReader {
    constructor(reader) {
        this.reader = reader;
        this.matches = [];
    }
    load() {
        this.reader.read();
        this.matches = this.reader.data.map((row) => {
            // tupples can be used here as the order in row is fixed
            return [
                (0, utils_1.stringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                // type assertion --> ts will now conside the value to not
                // be a string and be one of the following values 'H, 'A', 'D'
                row[5],
                row[6],
            ];
        });
    }
}
exports.MatchReader = MatchReader;

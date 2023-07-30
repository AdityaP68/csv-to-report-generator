"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
// tuple declaration only custom to current csv 
//Generics being used here same as cpp templates
class CsvFileReader {
    // if constructor defined like this it automatically creates a
    // field of filename with access modifier as public
    constructor(filename) {
        this.filename = filename;
        this.data = []; // says we are using arrays of arrays
    }
    read() {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: "utf-8",
        })
            .split("\n")
            .map((row) => {
            return row.split(",");
        })
            // : (Date | string | number | MatchResults) instead of any
            .map(this.mapRow);
    }
}
exports.CsvFileReader = CsvFileReader;

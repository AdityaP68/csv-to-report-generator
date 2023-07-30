"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResults_1 = require("../MatchResults");
// optional to add implements in class def
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        for (let match of matches) {
            if (match[1] === "Man United" && match[5] === MatchResults_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (match[1] === "Man United" &&
                match[5] === MatchResults_1.MatchResult.AwayWin) {
                wins++;
            }
        }
        return `This ${this.team} won ${wins} games`;
    }
}
exports.WinsAnalysis = WinsAnalysis;

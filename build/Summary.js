"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
// this class is kinda like a coordinator of sorts 
// deals with data handover does nothing else 
class Summary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;

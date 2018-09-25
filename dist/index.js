"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SolarActivityAnalyser_1 = require("./class/SolarActivityAnalyser");
var CliTable_1 = require("./class/CliTable");
var solarActivityResult_1 = __importDefault(require("./utils/solarActivityResult"));
exports.default = (function (rawData) {
    // Starts a timer
    console.time('process');
    var requestedResult = rawData[0], gridSize = rawData[1], heatMeasurementsLit = rawData.slice(2);
    var _a = new SolarActivityAnalyser_1.SolarActivityAnalyser().initAnalyser(gridSize, heatMeasurementsLit), solarActivityGrid = _a.solarActivityGrid, activityScoreList = _a.activityScoreList;
    // console Grid on CLI
    new CliTable_1.CliTable()
        .consoleMatrixCLITable(gridSize, solarActivityGrid);
    // console result in tabular formate on CLI
    new CliTable_1.CliTable(["Expected Output", "X", "Y", "Score"])
        .consoleResultTable(requestedResult, activityScoreList);
    // console expected result string
    return solarActivityResult_1.default(requestedResult, activityScoreList);
    // console time taken by process
    console.timeEnd('process');
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var assert_1 = __importDefault(require("assert"));
var mocha_1 = require("mocha");
var SunSportAnalyser_1 = require("./SunSportAnalyser");
var testData = JSON.parse(fs_1.readFileSync('./testData.json', { encoding: 'utf-8' }));
mocha_1.describe("SunSpotAnalyser", function () {
    var _loop_1 = function (i) {
        var data = testData[i];
        mocha_1.it("should return " + data.output, function () {
            assert_1.default.equal(new SunSportAnalyser_1.SunSpotAnalyser(data['input'].split(/\s/g)).printResult(), "" + data.output);
        });
    };
    for (var i = 0; i < testData.length; i++) {
        _loop_1(i);
    }
});

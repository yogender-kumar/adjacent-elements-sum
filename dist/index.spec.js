"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var assert_1 = __importDefault(require("assert"));
var mocha_1 = require("mocha");
var index_1 = __importDefault(require("./index"));
var mockData = JSON.parse(fs_1.readFileSync('./mock/index.json', { encoding: 'utf-8' }));
mocha_1.describe("Thermal_Activity_Raw_Heat_Measurement", function () {
    var _loop_1 = function (i) {
        var data = mockData[i];
        mocha_1.it("should return " + data.output, function () {
            assert_1.default.equal(index_1.default(data['input'].split(/\s/g)), "" + data.output);
        });
    };
    for (var i = 0; i < mockData.length; i++) {
        _loop_1(i);
    }
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var SunSportAnalyser_1 = require("./SunSportAnalyser");
var testData = JSON.parse(fs_1.readFileSync('./testData.json', { encoding: 'utf-8' }));
var data = testData[0]['input'].split(/\s/g);
var sunSportAnalyser = new SunSportAnalyser_1.SunSpotAnalyser(data).printResult();

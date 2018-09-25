"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("../store");
var createMatrix_1 = __importDefault(require("../utils/createMatrix"));
var calculateAdjacentElement_1 = __importDefault(require("../utils/calculateAdjacentElement"));
/**
* SolarActivityAnalyser class
* creates a grid of raw heat measurements that represent the Sun's surface
*/
var SolarActivityAnalyser = /** @class */ (function () {
    function SolarActivityAnalyser() {
        /**
         * @member activityScoreList is instance of BinarySearchTree
         */
        this.activityScoreList = new store_1.BinarySearchTree();
    }
    /**
     * This method accepts two parameters (gridSize & heatMeasurement raw data) and
     * returns the object (matrix & descending list of solar activity score)
     *
     * @param gridSize
     * @param heatMeasurementsLit
     */
    SolarActivityAnalyser.prototype.initAnalyser = function (gridSize, heatMeasurementsLit) {
        var solarActivityGrid = this.createSolarActivityScoreList(gridSize, createMatrix_1.default(gridSize, heatMeasurementsLit));
        var activityScoreList = this.activityScoreList.descendingSort();
        return {
            solarActivityGrid: solarActivityGrid,
            activityScoreList: activityScoreList
        };
    };
    /**
    * This method creates the list of Solar Activity Score
    *
    * @private
    * @method
    */
    SolarActivityAnalyser.prototype.createSolarActivityScoreList = function (gridSize, solarActivityGrid) {
        for (var row = 0; row < gridSize; row++) {
            for (var column = 0; column < gridSize; column++) {
                this.activityScoreList.insert(calculateAdjacentElement_1.default(row, column, solarActivityGrid), { row: row, column: column });
            }
        }
        return solarActivityGrid;
    };
    return SolarActivityAnalyser;
}());
exports.SolarActivityAnalyser = SolarActivityAnalyser;

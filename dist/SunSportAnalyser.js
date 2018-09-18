"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cli_color_1 = __importDefault(require("cli-color"));
var BinarySearchTree_1 = require("./BinarySearchTree");
var CliTable_1 = require("./CliTable");
/**
* SunSpotAnalyser class
* @param {Array} testData list of (number of highest rated locations | grid size | grid elements)
*/
var SunSpotAnalyser = /** @class */ (function () {
    function SunSpotAnalyser(testData) {
        this.grid = Array(Array());
        this.binaryTree = new BinarySearchTree_1.Tree();
        // Start process timer to check time taken by Job
        console.time('process');
        this.data = testData;
        this.resultReuested = Number(testData[0]);
        this.gridSize = Number(testData[1]);
        this.createGrid();
        this.createAdjacentSumList();
    }
    /**
     * This method creates the 2d grid array for the grid elements provided in `testData`
     *
     * @private
     * @method
     */
    SunSpotAnalyser.prototype.createGrid = function () {
        // Set inital count `2` to skip to `t` & `n` (requested highest rated locations & grid size respectively)
        var count = 2;
        // Create a instance of CLI Table & set Header to display grid on CLI
        var table = new CliTable_1.CliTable();
        table.pushToTable([
            ''
        ].concat(Array(this.gridSize).fill(0).map(function (val, i) { return cli_color_1.default.red('x' + i); })));
        for (var i = 0; i < this.gridSize; i++) {
            this.grid[i] = Array();
            for (var j = 0; j < this.gridSize; j++) {
                this.grid[i].push(Number(this.data[count]));
                count++;
            }
            // pushing grid row to CLI Table for graphical representation
            table.pushToTable([cli_color_1.default.red('y' + (i === 0 ? 0 : i))].concat(this.grid[i]));
        }
        // Console CLI Table
        table.consoleData();
    };
    /**
     * This method creates the list of sum of all adjacent elements item
     *
     * @private
     * @method
     */
    SunSpotAnalyser.prototype.createAdjacentSumList = function () {
        for (var i = 0; i < this.gridSize; i++) {
            for (var j = 0; j < this.gridSize; j++) {
                this.calculateAdjacentSum(i, j);
            }
        }
    };
    /**
     * This method calculates the sum of adjacent element
     * Insert the sum & cordinates in Binary tree
     *
     * @private
     * @method
     * @param {Number} x row index
     * @param {Number} y column index
     */
    SunSpotAnalyser.prototype.calculateAdjacentSum = function (x, y) {
        var row1 = this.grid[x - 1];
        var row2 = this.grid[x];
        var row3 = this.grid[x + 1];
        var sum = 0;
        if (row1) {
            sum += (row1[y - 1] || 0) + (row1[y] || 0) + (row1[y + 1] || 0);
        }
        if (row2) {
            sum += (row2[y - 1] || 0) + (row2[y] || 0) + (row2[y + 1] || 0);
        }
        if (row3) {
            sum += (row3[y - 1] || 0) + (row3[y] || 0) + (row3[y + 1] || 0);
        }
        this.binaryTree.insert(sum, { x: x, y: y });
    };
    /**
     * This method prints the result for highest rated locations as per the requested result item
     *
     * @public
     * @method
     */
    SunSpotAnalyser.prototype.printResult = function () {
        var count = 0;
        var list = this.binaryTree.sortDESC();
        // Create a instance of CLI Table & set Header to display highest rated locations
        var cliTable = new CliTable_1.CliTable(["Expected Output", "X", "Y", "Score"]);
        var result = '';
        while (count < this.resultReuested) {
            var output = "(" + list[count].obj.y + "," + list[count].obj.x + " score:" + list[count].value + ")";
            cliTable.pushToTable([output, list[count].obj.x, list[count].obj.y, list[count].value]);
            result += output;
            count++;
        }
        cliTable.consoleData();
        // print time taken by process to complete the job
        console.timeEnd('process');
        return result;
    };
    return SunSpotAnalyser;
}());
exports.SunSpotAnalyser = SunSpotAnalyser;

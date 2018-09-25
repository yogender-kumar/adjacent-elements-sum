"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cli_table2_1 = __importDefault(require("cli-table2"));
var cli_color_1 = __importDefault(require("cli-color"));
var solarActivityResult_1 = __importDefault(require("../utils/solarActivityResult"));
/**
 * CliTable class is used to display data in tabular form on command prompt
 */
var CliTable = /** @class */ (function () {
    function CliTable(head) {
        if (head === void 0) { head = []; }
        this.table = new cli_table2_1.default({
            head: head
        });
    }
    /**
     * This method console the table on command prompt
     */
    CliTable.prototype.consoleTable = function () {
        console.log(this.table.toString());
    };
    /**
     * This method console the grid table
     * @param gridSize
     * @param solarActivityGrid
     */
    CliTable.prototype.consoleMatrixCLITable = function (gridSize, solarActivityGrid) {
        var count = 0;
        this.table.push([
            ''
        ].concat(Array(gridSize).fill(0).map(function (val, index) { return cli_color_1.default.red('x' + index); })));
        while (count < gridSize) {
            this.table.push([
                cli_color_1.default.red('y' + count)
            ].concat(solarActivityGrid[count]));
            count++;
        }
        this.consoleTable();
        return true;
    };
    /**
     * This method console the expected result with area coordinates
     * @param requestedResult
     * @param activityScoreList
     */
    CliTable.prototype.consoleResultTable = function (requestedResult, activityScoreList) {
        var count = 0;
        while (count < requestedResult) {
            this.table.push([
                solarActivityResult_1.default(requestedResult, activityScoreList),
                activityScoreList[count].obj.row,
                activityScoreList[count].obj.column,
                activityScoreList[count].value
            ]);
            count++;
        }
        this.consoleTable();
        return true;
    };
    return CliTable;
}());
exports.CliTable = CliTable;

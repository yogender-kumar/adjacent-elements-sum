"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cli_table2_1 = __importDefault(require("cli-table2"));
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
     * This method push the row data in table object
     * @param {Object} item list of data to display in a row
     */
    CliTable.prototype.pushToTable = function (item) {
        this.table.push(item);
    };
    /**
     * This method console the table on command prompt
     */
    CliTable.prototype.consoleData = function () {
        console.log(this.table.toString());
    };
    return CliTable;
}());
exports.CliTable = CliTable;

"use strict";
/**
 * This utility method returns the expected result string of requested number of increased solar activity
 *
 * @param requestedResult number of result to print
 * @param activityScoreList list of solar activity areas with value
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (requestedResult, activityScoreList) {
    var count = 0;
    var consoleOutput = '';
    while (count < requestedResult) {
        consoleOutput += "(" + activityScoreList[count].obj.column + "," + activityScoreList[count].obj.row + " score:" + activityScoreList[count].value + ")";
        count++;
    }
    return consoleOutput;
});

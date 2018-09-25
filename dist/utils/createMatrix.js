"use strict";
/**
 * This utility method accepts gridSize & dataList and returns the 2D array
 *
 * @param {Number} gridSize is the size of the grid and grid
 * @param {Array} dataList taht form the matrix
 * @returns 2D array
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (gridSize, dataList) {
    var matrix = Array(Array());
    var count = 0;
    for (var row = 0; row < gridSize; row++) {
        matrix[row] = Array();
        for (var column = 0; column < gridSize; column++) {
            matrix[row].push(Number(dataList[count]));
            count++;
        }
    }
    return matrix;
});

/**
 * This unitily method assepts (row, column) index, matrix & returs the sum of adjacent elements sum
 * 
 * @param {Number} row index of row
 * @param {Number} column index of column
 * @param {Array} matrix 2D Array
 * @returns Number
 */

export default (row: number, column: number, matrix: number[][]) => {

    const aboveRow = matrix[row - 1];
    const currentRow = matrix[row];
    const belowRow = matrix[row + 1];
    let adjacentElementSum = 0;

    if (aboveRow) {
        adjacentElementSum += (aboveRow[column - 1] || 0) + (aboveRow[column] || 0) + (aboveRow[column + 1] || 0)
    }
    if (currentRow) {
        adjacentElementSum += (currentRow[column - 1] || 0) + (currentRow[column] || 0) + (currentRow[column + 1] || 0)
    }
    if (belowRow) {
        adjacentElementSum += (belowRow[column - 1] || 0) + (belowRow[column] || 0) + (belowRow[column + 1] || 0)
    }

    return adjacentElementSum;

}
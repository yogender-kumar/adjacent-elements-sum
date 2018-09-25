/**
 * This utility method accepts gridSize & dataList and returns the 2D array
 * 
 * @param {Number} gridSize is the size of the grid and grid
 * @param {Array} dataList taht form the matrix
 * @returns 2D array
 */

export default (gridSize: number, dataList: number[]) => {
    const matrix: any[][] = Array(Array());
    let count: number = 0;
    for (let row = 0; row < gridSize; row++) {

        matrix[row] = Array();
        for (let column = 0; column < gridSize; column++) {
            matrix[row].push(Number(dataList[count]));
            count++;
        }
    }
    return matrix;
}
import Color from 'cli-color';

import { Tree } from './BinarySearchTree';
import { CliTable } from './CliTable';

/**
* SunSpotAnalyser class
* @param {Array} testData list of (number of highest rated locations | grid size | grid elements)
*/
export class SunSpotAnalyser {
    
    /**
    * @member {Number|Object|Array|Any}
    */
    private data: number[];
    private resultReuested: number;
    private gridSize: number;
    private grid: any[][] = Array(Array());
    private binaryTree: any = new Tree();
    
    constructor(testData: number[]){

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
    private createGrid(): void{

        // Set inital count `2` to skip to `t` & `n` (requested highest rated locations & grid size respectively)
        let count: number = 2;
        // Create a instance of CLI Table & set Header to display grid on CLI
        let table = new CliTable();
        table.pushToTable(
            [
                '',
                ...Array(this.gridSize).fill(0).map( (val, i) => Color.red('x'+i))
            ]
        );

        for(let i = 0; i< this.gridSize; i++){

            this.grid[i] = Array();
            for(let j = 0; j < this.gridSize; j++){
                this.grid[i].push(Number(this.data[count]));
                count++;
            }

            // pushing grid row to CLI Table for graphical representation
            table.pushToTable([Color.red('y'+ (i === 0 ? 0 : i) ), ...this.grid[i]]);
        }

        // Console CLI Table
        table.consoleData();
    }

    /**
     * This method creates the list of sum of all adjacent elements item
     * 
     * @private
     * @method
     */
    private createAdjacentSumList():void {
        for(let i = 0; i<this.gridSize; i++){
            for(let j = 0; j< this.gridSize; j++){
                this.calculateAdjacentSum(i,j);
            }
        }
    }

    /**
     * This method calculates the sum of adjacent element
     * Insert the sum & cordinates in Binary tree
     * 
     * @private
     * @method
     * @param {Number} x row index
     * @param {Number} y column index
     */
    private calculateAdjacentSum(x: number, y: number) {
        
        let row1 = this.grid[x-1];
        let row2 = this.grid[x];
        let row3 = this.grid[x+1];
        let sum = 0;
        
        if(row1){
            sum += (row1[y-1] || 0) + (row1[y] || 0) + (row1[y+1] || 0)
        }
        if(row2){
            sum += (row2[y-1] || 0) + (row2[y] || 0) + (row2[y+1] || 0)
        }
        if(row3){
            sum += (row3[y-1] || 0) + (row3[y] || 0) + (row3[y+1] || 0)
        }
        
        this.binaryTree.insert(sum, {x, y});
    }

    /**
     * This method prints the result for highest rated locations as per the requested result item
     * 
     * @public
     * @method
     */
    public printResult(): string {

        let count: number = 0;
        let list: Array<any> = this.binaryTree.sortDESC();
        // Create a instance of CLI Table & set Header to display highest rated locations
        let cliTable = new CliTable(["Expected Output", "X", "Y", "Score"]);
        let result: string = '';

        while(count < this.resultReuested){
            let output = `(${list[count].obj.y},${list[count].obj.x} score:${list[count].value})`;
            cliTable.pushToTable([output, list[count].obj.x, list[count].obj.y, list[count].value]);
            result += output;
            count++;
        }

        cliTable.consoleData();

        // print time taken by process to complete the job
        console.timeEnd('process');
        return result;
        
    }
}

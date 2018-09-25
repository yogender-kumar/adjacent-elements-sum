import Table from 'cli-table2';
import Color from 'cli-color';

import activityResult from '../utils/solarActivityResult';

/**
 * CliTable class is used to display data in tabular form on command prompt
 */
export class CliTable{

    table: Array<any>;
    constructor(head: string[] = []) {
        this.table = new Table({
            head: head
        });
    }

    /**
     * This method console the table on command prompt
     */
    private consoleTable(): void{
        console.log(this.table.toString());
    }

    /**
     * This method console the grid table
     * @param gridSize
     * @param solarActivityGrid 
     */
    public consoleMatrixCLITable(gridSize: number, solarActivityGrid: number[][]): boolean {
        let count = 0;
        this.table.push(
            [
                '',
                ...Array(gridSize).fill(0).map((val, index) => Color.red('x' + index))
            ]
        );
        while (count < gridSize) {
            this.table.push(
                [
                    Color.red('y' + count), ...solarActivityGrid[count]
                ]
            );
            count++;
        }
        this.consoleTable();
        return true;
    }

    /**
     * This method console the expected result with area coordinates
     * @param requestedResult 
     * @param activityScoreList 
     */
    public consoleResultTable(requestedResult: number, activityScoreList: any[]): boolean{
        let count: number = 0;

        while (count < requestedResult) {

            this.table.push(
                [
                    activityResult(requestedResult, activityScoreList),
                    activityScoreList[count].obj.row,
                    activityScoreList[count].obj.column,
                    activityScoreList[count].value
                ]
            );
            count++;
        }
        this.consoleTable();
        return true;
    }

}
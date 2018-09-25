import { BinarySearchTree } from '../store';
import createMatrix from '../utils/createMatrix';
import calculateAdjacentSum from '../utils/calculateAdjacentElement';

/**
* SolarActivityAnalyser class
* creates a grid of raw heat measurements that represent the Sun's surface
*/
export class SolarActivityAnalyser {

    /**
     * @member activityScoreList is instance of BinarySearchTree
     */
    private activityScoreList: any = new BinarySearchTree();

    /**
     * This method accepts two parameters (gridSize & heatMeasurement raw data) and
     * returns the object (matrix & descending list of solar activity score)
     * 
     * @param gridSize 
     * @param heatMeasurementsLit 
     */
    public initAnalyser(gridSize: number, heatMeasurementsLit: number[]): any {
        const solarActivityGrid = this.createSolarActivityScoreList(
            gridSize,
            createMatrix(gridSize, heatMeasurementsLit)
        );
        const activityScoreList = this.activityScoreList.descendingSort();

        return {
            solarActivityGrid,
            activityScoreList
        };
    }

    /**
    * This method creates the list of Solar Activity Score
    * 
    * @private
    * @method
    */
    private createSolarActivityScoreList(gridSize: number, solarActivityGrid: number[][]): number[][] {

        for (let row = 0; row < gridSize; row++) {
            for (let column = 0; column < gridSize; column++) {
                this.activityScoreList.insert(
                    calculateAdjacentSum(row, column, solarActivityGrid),
                    { row, column }
                );
            }
        }
        
        return solarActivityGrid;
    }
}

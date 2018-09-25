/**
 * This utility method returns the expected result string of requested number of increased solar activity
 * 
 * @param requestedResult number of result to print
 * @param activityScoreList list of solar activity areas with value
 */

export default (requestedResult: number, activityScoreList: any[]): string => {
    let count: number = 0;
    let consoleOutput: string = '';

    while (count < requestedResult) {
        consoleOutput += `(${activityScoreList[count].obj.column},${activityScoreList[count].obj.row} score:${activityScoreList[count].value})`;
        count++;
    }
    return consoleOutput;
}
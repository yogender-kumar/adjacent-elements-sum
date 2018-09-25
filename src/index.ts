import { SolarActivityAnalyser } from './class/SolarActivityAnalyser';
import { CliTable } from './class/CliTable';
import activityResult from './utils/solarActivityResult';

export default (rawData: number[]): string => {
    // Starts a timer
    console.time('process');

    const [
        requestedResult,
        gridSize,
        ...heatMeasurementsLit
    ] = rawData;

    const {
        solarActivityGrid,
        activityScoreList
    } = new SolarActivityAnalyser().initAnalyser(gridSize, heatMeasurementsLit);

    // console Grid on CLI
    new CliTable()
    .consoleMatrixCLITable(gridSize, solarActivityGrid);

    // console result in tabular formate on CLI
    new CliTable(["Expected Output", "X", "Y", "Score"])
    .consoleResultTable(requestedResult, activityScoreList);

    // console expected result string
    return activityResult(requestedResult, activityScoreList);

    // console time taken by process
    console.timeEnd('process');

}


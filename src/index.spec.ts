import { readFileSync } from 'fs';
import assert from 'assert';
import { describe, it } from 'mocha';
import rawHeatMeasurement from './index';

const mockData: any[] = JSON.parse(readFileSync('./mock/index.json', { encoding: 'utf-8' }));

describe(`Thermal_Activity_Raw_Heat_Measurement`, function () {
    for(let i = 0; i< mockData.length; i++){
        let data = mockData[i];
        it(`should return ${data.output}`, () => {
            assert.equal( rawHeatMeasurement(data['input'].split(/\s/g)), `${data.output}`);
        });
    }
});
import { readFileSync } from 'fs';
import assert from 'assert';
import { describe, it } from 'mocha';
import { SunSpotAnalyser } from './SunSportAnalyser';

const testData: any[] = JSON.parse(readFileSync('./testData.json', { encoding: 'utf-8'}));

describe(`SunSpotAnalyser`, function () {
    for(let i = 0; i< testData.length; i++){
        let data = testData[i];
        it(`should return ${data.output}`, () => {
            assert.equal( new SunSpotAnalyser(data['input'].split(/\s/g)).printResult(), `${data.output}`);
        });
    }
});
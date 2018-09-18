import { readFileSync } from 'fs';
import { SunSpotAnalyser } from './SunSportAnalyser';

const testData: any[] = JSON.parse(readFileSync('./testData.json', { encoding: 'utf-8'}));

let data: number[] = testData[0]['input'].split(/\s/g);

const sunSportAnalyser = new SunSpotAnalyser(data).printResult();
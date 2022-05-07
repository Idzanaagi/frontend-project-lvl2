import { test, expect } from '@jest/globals';
import getTree from '../src/index.js';
import { readFile } from '../parsers.js';

const expectedResult = readFile('result.txt');
const currentJson = getTree('file1.json', 'file2.json');
const currentYaml = getTree('file1.yaml', 'file2.yml');

test('compare JSON files', () => {
  expect(currentJson).toEqual(expectedResult);
});

test('compare YAML files', () => {
  expect(currentYaml).toEqual(expectedResult);
});

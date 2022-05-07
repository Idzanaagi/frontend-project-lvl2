import { test, expect } from '@jest/globals';
import gendiff from '../src/gendiff.js';
import { readFile } from '../parsers.js';

const expectedResult = readFile('result.txt');
const currentJson = gendiff('file1.json', 'file2.json');
const currentYaml = gendiff('file1.yaml', 'file2.yml');

test('compare JSON files', () => {
  expect(currentJson).toEqual(expectedResult);
});

test('compare YAML files', () => {
  expect(currentYaml).toEqual(expectedResult);
});

import { test, expect } from '@jest/globals';
import genDiff from '../src/compareObjects.js';
import { readFile } from '../parsers.js';

const nestedFileResult = readFile('resultNested.txt');
const nestedJson = genDiff('file1.json', 'file2.json');
const nestedYaml = genDiff('file1.yaml', 'file2.yaml');
const nestedYml = genDiff('file1.yml', 'file2.yml');

test('nestedFileComparison', () => {
  expect(nestedJson).toEqual(nestedFileResult);
  expect(nestedYaml).toEqual(nestedFileResult);
  expect(nestedYml).toEqual(nestedFileResult);
});

const formatterPlainResult = readFile('resultPlain.txt');
const nestedJsonPlain = genDiff('file1.json', 'file2.json', 'plain');
const nestedYamlPlain = genDiff('file1.yaml', 'file2.yaml', 'plain');
const nestedYmlPlain = genDiff('file1.yml', 'file2.yml', 'plain');

test('formatterPlain', () => {
  expect(nestedJsonPlain).toEqual(formatterPlainResult);
  expect(nestedYamlPlain).toEqual(formatterPlainResult);
  expect(nestedYmlPlain).toEqual(formatterPlainResult);
});

const formatterJsonResult = readFile('resultJSON.txt');
const nestedJsonJSON = genDiff('file1.json', 'file2.json', 'json');
const nestedYamlJSON = genDiff('file1.yaml', 'file2.yaml', 'json');
const nestedYmlJSON = genDiff('file1.yml', 'file2.yml', 'json');

test('formatterJson', () => {
  expect(nestedJsonJSON).toEqual(formatterJsonResult);
  expect(nestedYamlJSON).toEqual(formatterJsonResult);
  expect(nestedYmlJSON).toEqual(formatterJsonResult);
});

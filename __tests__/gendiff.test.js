import { test, expect } from '@jest/globals';
import * as fs from 'fs';
import genDiff from '../src/compareObjects.js';
import { getFilePath } from '../parsers.js';

const nestedFileResult = fs.readFileSync(`${getFilePath('__fixtures__/resultNested.txt')}`, 'utf-8');
const nestedJson = genDiff('__fixtures__/file1.json', '__fixtures__/file2.json');
const nestedYaml = genDiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml');
const nestedYml = genDiff('__fixtures__/file1.yml', '__fixtures__/file2.yml');

test('nestedFileComparison', () => {
  expect(nestedJson).toEqual(nestedFileResult);
  expect(nestedYaml).toEqual(nestedFileResult);
  expect(nestedYml).toEqual(nestedFileResult);
});

const formatterPlainResult = fs.readFileSync(`${getFilePath('__fixtures__/resultPlain.txt')}`, 'utf-8');
const nestedJsonPlain = genDiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'plain');
const nestedYamlPlain = genDiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml', 'plain');
const nestedYmlPlain = genDiff('__fixtures__/file1.yml', '__fixtures__/file2.yml', 'plain');

test('formatterPlain', () => {
  expect(nestedJsonPlain).toEqual(formatterPlainResult);
  expect(nestedYamlPlain).toEqual(formatterPlainResult);
  expect(nestedYmlPlain).toEqual(formatterPlainResult);
});

const formatterJsonResult = fs.readFileSync(`${getFilePath('__fixtures__/resultJSON.txt')}`, 'utf-8');
const nestedJsonJSON = genDiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'json');
const nestedYamlJSON = genDiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml', 'json');
const nestedYmlJSON = genDiff('__fixtures__/file1.yml', '__fixtures__/file2.yml', 'json');

test('formatterJson', () => {
  expect(nestedJsonJSON).toEqual(formatterJsonResult);
  expect(nestedYamlJSON).toEqual(formatterJsonResult);
  expect(nestedYmlJSON).toEqual(formatterJsonResult);
});

test('invalidValue', () => {
  expect(() => {
    genDiff('__fixtures__/file1.yml', '__fixtures__/file2.ym');
  }).toThrow();
});

const absolutePath = getFilePath('/home/idzanagi/frontend-project-lvl2/__fixtures__/file1.json');

test('getFilePath', () => {
  expect(absolutePath).toEqual('/home/idzanagi/frontend-project-lvl2/__fixtures__/file1.json');
});

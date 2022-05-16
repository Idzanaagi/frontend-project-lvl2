import { test, expect } from '@jest/globals';
import genDiff from '../src/compareObjects.js';
import { readFile } from '../parsers.js';

const nestedFileResult = readFile('resultNested.txt');
const nestedJson = genDiff('file1nested.json', 'file2nested.json');
const nestedYaml = genDiff('file1nested.yaml', 'file2nested.yaml');
const nestedYml = genDiff('file1nested.yml', 'file2nested.yml');

test('nestedFileComparison', () => {
  expect(nestedJson).toEqual(nestedFileResult);
  expect(nestedYaml).toEqual(nestedFileResult);
  expect(nestedYml).toEqual(nestedFileResult);
});

const formatterPlainResult = readFile('resultPlain.txt');
const nestedJsonPlain = genDiff('file1nested.json', 'file2nested.json', 'plain');
const nestedYamlPlain = genDiff('file1nested.yaml', 'file2nested.yaml', 'plain');
const nestedYmlPlain = genDiff('file1nested.yml', 'file2nested.yml', 'plain');

test('formatterPlain', () => {
  expect(nestedJsonPlain).toEqual(formatterPlainResult);
  expect(nestedYamlPlain).toEqual(formatterPlainResult);
  expect(nestedYmlPlain).toEqual(formatterPlainResult);
});

const formatterJsonResult = readFile('resultJSON.txt');
const nestedJsonJSON = genDiff('file1nested.json', 'file2nested.json', 'json');
const nestedYamlJSON = genDiff('file1nested.yaml', 'file2nested.yaml', 'json');
const nestedYmlJSON = genDiff('file1nested.yml', 'file2nested.yml', 'json');

test('formatterJson', () => {
  expect(nestedJsonJSON).toEqual(formatterJsonResult);
  expect(nestedYamlJSON).toEqual(formatterJsonResult);
  expect(nestedYmlJSON).toEqual(formatterJsonResult);
});

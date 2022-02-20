/* eslint-disable no-undef */
import gendiff from '../src/gendiff.js';

test('reverse', () => {
  expect(gendiff()).toEqual(gendiff());
});

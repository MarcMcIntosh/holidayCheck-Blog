/* global test, expect */
import formatUrl from '../src/formatUrl';

const expctedResult = '/foo';

const result = formatUrl('/foo');

test('Urls are formated properly', () => {
  expect(result).toBe(expctedResult);
});

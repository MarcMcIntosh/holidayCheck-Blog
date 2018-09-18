/* global test, expect */
const sortByDate = require('../src/containers/Posts/sortByDate');

const testDateOne = new Date(2018, 8, 13);
const testDateTwo = new Date(2018, 8, 14);

/* const expectedResult = [
  { date: testDateOne },
  { date: testDateTwo },
];
*/

const dateArray = [
  { date: testDateTwo },
  { date: testDateOne },
];

test('Dates should be sorted in chronological order', () => {
  const results = dateArray.sort(sortByDate);
  expect(results[0].date).toBe(testDateOne);
  expect(results[1].date).toBe(testDateTwo);
});

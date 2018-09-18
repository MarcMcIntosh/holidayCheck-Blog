/* global test, expect */
import markdownRenderer from '../src/components/Markdown';

const md = '# Hello';

const html = markdownRenderer.render(md);

const expectedResult = `<h1>Hello</h1>
`;

test('Markdown Parser', () => {
  // console.log({ md, html });
  expect(html).toBe(expectedResult);
});

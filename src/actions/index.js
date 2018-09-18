import fetch from 'isomorphic-fetch';

export const MARKDOWN_REQUEST = 'MARKDOWN_REQUEST';
export const MARKDOWN_RECEIVED = 'MARKDOWN_RECEIVED';
export const MARKDOWN_REJECTED = 'MARKDOWN_REJECTED';

const markdownRequest = payload => ({ type: MARKDOWN_REQUEST, payload });
const markdownReceived = payload => ({ type: MARKDOWN_RECEIVED, payload });
const markdownRejected = payload => ({ type: MARKDOWN_REJECTED, payload });


export function fetchMarkdown(payload) {
  markdownRequest({ ...payload, fetching: true });
  const { url } = payload;
  return fetch(url).then((res) => {
    if (!res.ok) {
      const { message } = res;
      const error = { ...payload, message, error: true };
      throw error;
    }
    return { ...payload, markdown: res.body() };
  }).then(markdownReceived).catch(markdownRejected);
}

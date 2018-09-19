import fetch from 'isomorphic-fetch';

export const MARKDOWN_REQUEST = 'MARKDOWN_REQUEST';
export const MARKDOWN_RECEIVED = 'MARKDOWN_RECEIVED';
export const MARKDOWN_REJECTED = 'MARKDOWN_REJECTED';

const markdownRequest = payload => ({ type: MARKDOWN_REQUEST, payload });
const markdownReceived = payload => ({ type: MARKDOWN_RECEIVED, payload });
const markdownRejected = payload => ({ type: MARKDOWN_REJECTED, payload });

export function fetchMarkdown(payload) {
  return (dispatch) => {
    dispatch(markdownRequest({ ...payload, fetching: true }));
    const { url } = payload;
    return fetch(url).then((res) => {
      if (!res.ok) {
        const err = new Error(res.message || res.statusText || 'An error occured');
        throw err;
      }
      return res.text();
    }).then(markdown => dispatch(markdownReceived({
      ...payload,
      markdown,
      fetching: false,
    }))).catch(({ message }) => dispatch(markdownRejected({
      ...payload,
      error: true,
      message,
      fetching: false,
    })));
  };
}

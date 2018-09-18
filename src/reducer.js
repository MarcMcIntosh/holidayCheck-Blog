import {
  MARKDOWN_REQUEST,
  MARKDOWN_RECEIVED,
  MARKDOWN_REJECTED,
} from './actions';

import postData from './posts';

const DEFAULT_STATE_FOR_POSTS = Object.values(postData).map(d => Object.assign({}, d, {
  fetching: false,
  markdown: '',
  error: false,
  message: '',
})).reduce((a, b) => Object.assign({}, a, {
  [b.id]: b,
}), {});

const DEFAULT_STATE = {
  posts: DEFAULT_STATE_FOR_POSTS,
  open: -1,
};

function updatePosts({ posts }, { payload }) {
  const { id } = payload;
  const oldPost = posts[id];
  return { ...posts, [id]: { ...oldPost, ...payload } };
}

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case MARKDOWN_REQUEST:
    case MARKDOWN_RECEIVED:
    case MARKDOWN_REJECTED: return {
      ...state,
      posts: updatePosts(state, action.payload),
    };
    default: return state;
  }
}

export default reducer;

export const initialState = DEFAULT_STATE;

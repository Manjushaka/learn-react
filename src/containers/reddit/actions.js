import axios from 'axios';

export const REQUEST_POSTS = 'reddit/REQUEST_POSTS';
export const RECEIVE_POSTS = 'reddit/RECEIVE_POSTS';
export const SELECT_SUBREDDIT = 'reddit/SELECT_SUBREDDIT';
export const INVALIDATE_SUBREDDIT = 'reddit/INVALIDATE_SUBREDDIT';

export const selectSubreddit = (subreddit) => ({
  type: SELECT_SUBREDDIT,
  subreddit,
});

export const invalidateSubreddit = (subreddit) => ({
  type: INVALIDATE_SUBREDDIT,
  subreddit,
});

const requestPosts = (subreddit) => ({
  type: REQUEST_POSTS,
  subreddit,
});

const receivePosts = (subreddit, json) => ({
  type: RECEIVE_POSTS,
  subreddit,
  posts: json.data.children.map(child => child.data),
  receivedAt: Date.now(),
});

const fetchPosts = (subreddit) => (dispatch) => {
  dispatch(requestPosts(subreddit));
  return axios(`https://www.reddit.com/r/${subreddit}.json`)
    .then(response => {
      console.log(response);
      return response.data;
    })
    .then(json => dispatch(receivePosts(subreddit, json)))
}

const shouldFetchPosts = (state, subreddit) => {
  const posts = state.postsBySubreddit[subreddit];
  if (!posts) {
    return true;
  } else if (posts.isFetching) {
    return false;
  } else {
    return posts.didInvalidate;
  }
}

export const fetchPostsIfNeeded = (subreddit) => (dispatch, getState) => {
  if(shouldFetchPosts(getState().reddit, subreddit)) {
    return dispatch(fetchPosts(subreddit));
  }
}

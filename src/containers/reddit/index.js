import React from 'react';
import { connect } from 'react-redux';

import Posts from './components/Posts';
import Picker from './components/Picker';
import {
  selectSubreddit,
  invalidateSubreddit,
  fetchPostsIfNeeded,
} from './actions';

class RedditApp extends React.Component {
  componentDidMount() {
    const { dispatch, selectedSubreddit } = this.props;
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  }

  onHandleChangeSelect = (selectedSubreddit) => {
    this.props.dispatch(selectSubreddit(selectedSubreddit));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
      const { dispatch, selectedSubreddit } = nextProps;
      dispatch(fetchPostsIfNeeded(selectedSubreddit));
    }
  }


  handleClickRefresh = (e) => {
    e.preventDefault();

    const { dispatch, selectedSubreddit } = this.props;
    dispatch(invalidateSubreddit(selectedSubreddit));
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  }

  render() {
    const { selectedSubreddit, posts, lastUpdated, isFetching } = this.props;
    return (
      <div>
        <Picker
          value={selectedSubreddit}
          options={['reactjs', 'frontend']}
          onChange={this.onHandleChangeSelect}
        />
        <div>
          {
            lastUpdated && <span>last updated at {new Date(lastUpdated).toLocaleTimeString()}</span>
          }
          <a href="#" onClick={this.handleClickRefresh}>Refresh</a>
        </div>
        {
          isFetching && posts.length === 0 && <h2>Loading ...</h2>
        }
        {
          !isFetching && posts.length === 0 && <h2>Empty.</h2>
        }
        {
          posts.length > 0 && <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts posts={posts} />
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { selectedSubreddit, postsBySubreddit } = state.reddit;
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsBySubreddit[selectedSubreddit] || {
    isFetching: true,
    items: [],
  }
  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated,
  }
}

export default connect(mapStateToProps)(RedditApp);

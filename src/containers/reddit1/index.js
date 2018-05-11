import React from 'react';
import { connect } from 'react-redux';

import { fetchList } from './action';

const options = ['reactjs', 'frontend', 'sports'];

class Reddit1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'frontend',
    };
  }

  componentDidMount() {
    this.props.getReddit1List({
      name: this.state.name,
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log('receive props.');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name) {
      this.props.getReddit1List({
        name: this.state.name,
      });
    }
  }

  handleSelect = (e) => {
    const val = e.target.value;
    console.log(val);
    this.setState({
      name: val,
    });
  }

  render() {
    console.log('index-render: ', this.props);
    const { name } = this.state;
    const { isFetching, error, response } = this.props;
    return (
      <div>
        <div>
          <select onChange={this.handleSelect} value={name}>
          {
            options.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))
          }
        </select>
        </div>
        {
          isFetching && Object.keys(response).length === 0 && <h2>is loading ...</h2>
        }
        {
          !isFetching && error && <h2>has error !!!</h2>
        }
        {
          response.data && response.data.children.length > 0 && <div style={{ opacity: isFetching ? 0.5 : 1}}>
            {
              response.data.children.map((item) => (
                <div key={item.data.id}>{item.data.title}</div>
              ))
            }
            </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('map state to props: ', state.reddit1, ownProps);
  return state.reddit1;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log('map dispatch to props: ', dispatch, ownProps);
  return ({
    getReddit1List: (params) => {
      dispatch(fetchList(params));
    }
  })
}
// export default Reddit1; // this.props, history location match staticContext
export default connect(mapStateToProps, mapDispatchToProps)(Reddit1);

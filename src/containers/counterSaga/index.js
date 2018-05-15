import React from 'react';
import { Button } from 'antd';
import {connect} from 'react-redux';

class CounterSaga extends React.Component {
  handleAddAsync = () => {
    this.props.dispatch({
      type: 'SAGA_ADD_ASYNC',
    });
  }

  handleAdd = () => {
    this.props.dispatch({
      type: 'SAGA_ADD',
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleAddAsync}>Add After 1 second</Button>
        <br />
        <Button onClick={this.handleAdd}>Add</Button>
        <br />
        <Button>Minus</Button>
        <br />
        <h2>counter: {this.props.counter}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state.counterSaga;
}

export default connect(mapStateToProps)(CounterSaga);

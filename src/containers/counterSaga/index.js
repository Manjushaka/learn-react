import React from 'react';
import { Button } from 'antd';
import {connect} from 'react-redux';
import axios from 'axios';
import Point from '../../others/js/decorator';

/*
// Generator函数实现异步，saga的原理吧？？
const ai = ajaxMain('http://localhost:9002/user');
ai.next();

function* ajaxMain(url) {
  console.log(11);
  const res = yield request(url);
  console.log(22, res);
}

function request(url) {
  axios(url).then((response) => {
    ai.next(response);
  });
}
*/
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

  handleFetchMockList = () => {
    this.props.dispatch({
      type: 'SAGA_FETCH_MOCK_LIST',
      params: {
        name: 'test1',
        age: 123,
      },
    });
  }

  handleClickTestChannel = () => {
    this.props.dispatch({
      type: 'TEST_CHANNEL',
      payload: {
        params: {
          name: 'from dan',
          age: 18,
        },
      },
    });
  }

  render() {
    const { addCounter: { counter}, mockList } = this.props;
    const { isFetching, response, error } = mockList;

    return (
      <div>
        <h1>Counter Saga</h1>
        <Button onClick={this.handleAddAsync}>Add After 3 seconds</Button>
        <Button onClick={this.handleAdd}>Add</Button>
        <Button>Minus</Button>
        <h2>counter: {counter}</h2>
        <Button type="primary" onClick={this.handleFetchMockList}>fetch list</Button>
        {isFetching && <h2>loading ...</h2>}
        {!isFetching && error && <h2>error ...</h2>}
        {!isFetching && response.length === 0 ? (<h2>no data.</h2>) : (<div>
          {response.map(item => (<div key={item.id}><h4>{item.name}</h4>age: {item.age}, address: {item.address}</div>))}
          </div>)}
        <br />
        <Button id="test-channel" type="primary" onClick={this.handleClickTestChannel}>Test Channel</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.counterSaga;
}

export default connect(mapStateToProps)(CounterSaga);

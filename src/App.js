import React from 'react';
import logo from './logo.svg';
import './App.css';
import { changeNameAsync, fetchData } from './thunk';

const nameArr = ['tom', 'john', 'smith'];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false,
    }
    const { getState, dispatch, subscribe } = this.props.store;
    this.unsubscribe = subscribe(() => {
      this.setState(prevState => ({
        update: !prevState.update,
      }));
    });
    this.urls = ['http://localhost:3012/use', 'http://localhost:3012/user'];
  }

  handleClickAdd = () => {
    const { getState, dispatch, subscribe } = this.props.store;
    dispatch({
      type: 'ADD',
    })
  }

  handleClickChangeNameAsync = () => {
    this.props.store.dispatch(changeNameAsync(nameArr.shift()));
  }

  handleClickFetchData = () => {
    this.props.store.dispatch(fetchData(this.urls.shift())).then(res => console.log(res));
  }

  handleClickMinus = () => {
    const { getState, dispatch, subscribe } = this.props.store;
    dispatch({
      type: 'MINUS',
      payload: 2,
    });
  }

  render() {
    const { getState, dispatch, subscribe } = this.props.store;
    const { countAddMinus, nameAge, user } = getState();
    const { isLoading, data, error } = user;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">hello world</h1>
        </header>
        <div className="App-intro">
          <h1>hello: {nameAge.name}</h1>
          <h1>count: {countAddMinus.count}</h1>
          <button onClick={this.handleClickAdd}>+1</button>
          <br />
          <button onClick={this.handleClickChangeNameAsync}>change name Async</button>
          <br />
          <button onClick={this.handleClickMinus}>-2</button>
          <br />
          <button onClick={this.handleClickFetchData}>fetch data</button>
          <br />
        </div>
        <div>
          {
            error ? 'error' : (isLoading ? 'loading ...' : data.map((item) => (<div key={item.id}>{item.name}</div>)))
          }
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

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
  }

  handleClickAdd = () => {
        const { getState, dispatch, subscribe } = this.props.store;
        dispatch({
          type: 'ADD',
        })
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
    const { count } = getState();

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">hello world</h1>
        </header>
        <div className="App-intro">
          <h1>count: {count}</h1>
          <button onClick={this.handleClickAdd}>+1</button>
          <button onClick={this.handleClickMinus}>-2</button>
        </div>
      </div>
    );
  }
}

export default App;

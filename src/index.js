import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import { countAddMinus } from './reducer';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(countAddMinus);
store.subscribe(() => {
    console.log('subscribe state: ', store.getState());
})

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();

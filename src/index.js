import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import reducer from './reducer';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk),
    ),
);
// store.subscribe(() => {
//     console.log('subscribe state: ', store.getState());
// })

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();

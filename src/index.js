import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import Counter from './containers/counter';
import reducer from './reducer';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk),
    ),
);

setTimeout(function() {
    store.dispatch({
        type: 'ADD'
    })
}, 5000);

setTimeout(function() {
    store.dispatch({
        type: 'CHANGE_AGE',
        payload: {
            age: 24,
        }
    })
}, 10000);

// ReactDOM.render(<App store={store} />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
        <Counter />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

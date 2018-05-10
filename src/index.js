import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import Counter from './containers/counter';
import AddTodoWithRouter from './containers/addTodoWithRouter/index';
import Reddit from './containers/reddit/index';
import Test from './containers/test/index';
import reducer from './reducer';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk),
    ),
);

// setTimeout(function() {
//     store.dispatch({
//         type: 'ADD'
//     })
// }, 5000);

// setTimeout(function() {
//     store.dispatch({
//         type: 'CHANGE_AGE',
//         payload: {
//             age: 24,
//         }
//     })
// }, 10000);

// ReactDOM.render(<App store={store} />, document.getElementById('root'));
const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Test} />
    </Router>
  </Provider>
)
ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
);
registerServiceWorker();

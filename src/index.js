import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import Counter from './containers/counter';
import AddTodoWithRouter from './containers/addTodoWithRouter/index';
import Reddit from './containers/reddit/index';
import Reddit1 from './containers/reddit1/index';
import Test from './containers/test/index';
import CounterSaga from './containers/counterSaga/index';
import reducer from './reducer';
import registerServiceWorker from './registerServiceWorker';

// import { helloSaga } from './saga';
import rootSaga from './containers/counterSaga/saga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk, sagaMiddleware),
    ),
);

// sagaMiddleware.run(helloSaga);
sagaMiddleware.run(rootSaga);

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
/*const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Reddit1} />
    </Router>
  </Provider>
)*/
const Root = ({store}) => (
  <Provider store={store}>
    <CounterSaga name="this is root-reddit1" />
  </Provider>
);
ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
);
registerServiceWorker();

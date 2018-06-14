import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link, Switch, NavLink } from 'react-router-dom';

import './index.css';
// import App from './App';
// import RouterApp from './others/react-router-example/DealingWithUpdateBlocking';
// import Counter from './containers/counter';
// import AddTodoWithRouter from './containers/addTodoWithRouter/index';
// import Reddit from './containers/reddit/index';
// import Reddit1 from './containers/reddit1/index';
// import Test from './containers/test/index';
// import CounterSaga from './containers/counterSaga/index';
// import OptimizateReduxDemo from './containers/optimizateReduxDemo';
// import OptimizateReduxDemo2 from './containers/optimizateReduxDemo/index2';
import OptimizateReduxDemo3 from './containers/optimizateReduxDemo/index3';
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

// sagaMiddleware.run(rootSaga);

// ReactDOM.render(<App store={store} />, document.getElementById('root'));
/*const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Reddit1} />
    </Router>
  </Provider>
)*/
const items = [{
  itemId: 0,
  content: 'content 0',
}, {
  itemId: 1,
  content: 'content 1',
}, {
  itemId: 2,
  content: 'content 2',
}, {
  itemId: 3,
  content: 'content 3',
}, {
  itemId: 4,
  content: 'content 4',
}, {
  itemId: 5,
  content: 'content 5',
}]

const Root = ({store}) => (
  <Provider store={store}>
    <OptimizateReduxDemo3 test='test from root' items={items} />
  </Provider>
);

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
);

registerServiceWorker();

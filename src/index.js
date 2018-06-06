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
import RouterApp from './others/react-router-example/DealingWithUpdateBlocking';
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

sagaMiddleware.run(rootSaga);

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

const DashboardTest = () => (
  <h2> this is dashboard test</h2>
);

const Dashboard = () => (
  <h2> this is dashboard</h2>
);

const Home = () => (
  <h2> this is home.</h2>
);

const Lily = (props) => {
  console.log('lily: ', props);
  return (
    <h3>this is lily.</h3>
  );
}

const Introduce = (props) => {
  console.log(props);
  const { match } = props;
  return (
    <div>
      <h2>this is introduce</h2>
      <Link to={match.url + '/lily'}>Lily</Link>
      <Route path={match.url + '/lily'} component={Lily} />
    </div>
  );
}

const NoMatch = (props) => {
  console.log('nomatch: ', props);
  return (
    <h4>this is no match. 404.</h4>
  )
}

const App = () => (
  <div>
    <nav>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/introduce">Introduce</NavLink>
      <NavLink to="/home">Home</NavLink>
    </nav>
    <div>
      <Switch>
        <Route path="/dashboard/test" component={DashboardTest} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/introduce" component={Introduce} />
        <Route path="/home" component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </div>
)
ReactDOM.render(
    <RouterApp />,
    document.getElementById('root')
);

registerServiceWorker();

import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
)

const About = () => (
  <div>
    <h1>About</h1>
  </div>
)

const Topic = ({ match, location }) => {
  console.log(match, location);
  return (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);
}

const Topics = ({ match }) => (
  <div>
    <h1>Topics</h1>
    <ul>
      <li><Link to={`${match.url}/rendering`}>Rendering with React</Link></li>
      <li><Link to={`${match.url}/components`}>Components</Link></li>
      <li><Link to={`${match.url}/props-v-state`}>Props vs. State</Link></li>
    </ul>
    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route exact path={match.path} render={() => (
      <h3>please select a topic.</h3>)} />
  </div>
)

const RouterApp = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </BrowserRouter>
);

export default RouterApp;

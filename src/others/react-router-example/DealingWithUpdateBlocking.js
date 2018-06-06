import React from 'react';
import { BrowserRouter as Router, Route, NavLink, withRouter, Link } from 'react-router-dom';

const getConfirmation = (message, callback) => {
  console.log('get confirmation');
  const allowTransition = window.confirm(message)
  callback(allowTransition)
}

class Blocker extends React.PureComponent {
  render() {
    console.log(this.props);
    return (
      <div>
        <Link to="/about">About1</Link>
        <Link to="/faq">F.A.Q2</Link>
        <Link to={{
  pathname: '/courses',
  search: '?sort=name',
  hash: '#the-hash',
  state: { fromDashboard: true }
}} replace={true}>course3</Link>
      </div>
    );
  }
}

const BlockerAvoider = withRouter(Blocker);

const DealingWithUpdateBlocking = (props) => {
  console.log(props);
  return (
    <Router basename="/testbase">
      <BlockerAvoider />
    </Router>
  )
}

export default DealingWithUpdateBlocking;

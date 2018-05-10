import React from 'react';

class User extends React.PureComponent {
  constructor(props){
    super(props);
    console.log('user: constructor');
  }

  componentWillMount() {
    console.log('user: will mount');
  }

  componentDidMount() {
    console.log('user: did mount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('user: will receive props', this.props, nextProps);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('user: should update');
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log('user: did update');
  }
  render() {
    console.log('user: render');
    const { name, age } = this.props;
    return (
      <div>
        <h3>{name}</h3>
        <h3>{age}</h3>
      </div>
    );
  }
}

export default User;

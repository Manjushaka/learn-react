import React from 'react';
import User from './components/User';

const names = ['lucy', 'tom', 'amily'];
const ages = [20, 31, 49];
class Test extends React.Component {
  state = {
    name: 'lily',
    age: 12,
    info: {
      address1: 'No 1. Road.',
      address2: 'No 2. Road.',
    },
  }
  count = 0

  constructor(props){
    super(props);
    console.log('index: constructor');
  }

  componentWillMount() {
    console.log('index: will mount');
  }

  componentDidMount() {
    console.log('index: did mount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('index: will receive props');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('index: should update');
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('index: did update');
  }

  handleClickChange = () => {
    if (this.count % 3 === 0) {
      this.setState({
        name: names.shift(),
      });
    }
    if (this.count % 3 === 1) {
      this.setState({
        age: ages.shift(),
      })
    }
    if (this.count % 3 === 2) {
      this.setState((prevState) => {
        prevState.info.address3 = 'no3';
        return ({
          info: prevState.info,
        });
      })
    }
    this.count += 1;
  }
  render() {
    console.log('index: render');
    const { name, age, info } = this.state;
    return (
      <div>
        <h2>this is test page.</h2>
        <div>
          <button onClick={this.handleClickChange}>Change</button>
        </div>
        <User name={name} age={age} info={info} />
      </div>
    );
  }
}

export default Test;

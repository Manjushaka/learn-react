import React from 'react';

class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    };
  }

  componentDidMount() {
    this.setState({
      val: this.state.val + 1
    });
    console.log(this.state.val);
    this.setState({
      val: this.state.val + 1
    });
    console.log(this.state.val);
    setTimeout(() => {
      this.setState({
        val: this.state.val + 1
      });
      console.log(this.state.val);
      this.setState({
        val: this.state.val + 1
      });
      console.log(this.state.val);
    }, 0);
  }

  render() {
    console.log('render: ', this.state.val);
    return (
      <div>{this.state.val}</div>
    );
  }
}

export default Example;

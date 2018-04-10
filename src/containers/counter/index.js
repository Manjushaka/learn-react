import React from "react";
import { connect } from 'react-redux';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    console.log('cons: ');
  }
  
  componentWillMount() {
    console.log('cwm: ', this.props);
  }
  
  componentWillReceiveProps(nextProps) {
    console.log('cwrp: ', this.props.value, nextProps.value);
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('scu: ', this.props.value, nextProps.value);
    return true;
  }

  onIncreaseClick = () => {
    this.props.onIncreaseClick();
  }
  
  render() {
    const { value } = this.props;

    return (
      <div>
        <span>{value.count}</span>
        <br />
        <button onClick={this.onIncreaseClick}>Increase</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.countAddMinus
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  };
}

const increaseAction = {
  type: 'increase',
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

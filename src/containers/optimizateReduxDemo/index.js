import React from 'react';
import { connect } from 'react-redux';

const AComp = ({ name, count }) => {
  console.log('A Comp.');
  return (
    <div>
      <h3>A Comp</h3>
      <div>
        name: {name}, count: {count}
      </div>
    </div>
  );
};

const BComp = ({ name, count }) => {
  console.log('B Comp.');
  return (
    <div>
      <h3>B Comp</h3>
      <div>
        name: {name}, count: {count}
      </div>
    </div>
  );
};

const CComp = ({ name, count }) => {
  console.log('C Comp.');
  return (
    <div>
      <h3>C Comp</h3>
      <div>
        name: {name}, count: {count}
      </div>
    </div>
  );
};

const ConnectedAComp = connect(( { optimizateReduxDemo: { aData } }) => ({
  ...aData,
}))(AComp);

const ConnectedBComp = connect((state) => ({
  ...state.optimizateReduxDemo.bData,
}))(BComp);

const ConnectedCComp = connect((state) => ({
  ...state.optimizateReduxDemo.cData,
}))(CComp);

class OptimizateReduxDemo extends React.Component {
  /*render() {
    console.log('OptimizateReduxDemo, ', this.props);
    const { aData, bData, cData } = this.props;
    return (
      <div>
        <h1>Optimizate Redux Demo</h1>
        <AComp {...aData} />
        <BComp {...bData} />
        <CComp {...cData} />
      </div>
    );
  }*/

  render() {
    console.log('OptimizateReduxDemo, ', this.props);
    // const { aData, bData, cData } = this.props;
    return (
      <div>
        <h1>Optimizate Redux Demo</h1>
        <ConnectedAComp />
        <ConnectedBComp />
        <ConnectedCComp />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.optimizateReduxDemo
});

// this.props -> {test: 'test from root'}
// export default OptimizateReduxDemo;

// this.props -> {test: 'test from root', dispatch: func}
// export default connect()(OptimizateReduxDemo);

// this.props -> {test: 'test from root', dispatch: func, aData: {}, bData: {}, cData: {}}
// export default connect(mapStateToProps)(OptimizateReduxDemo);

export default OptimizateReduxDemo;

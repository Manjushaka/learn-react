import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from './Link';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.addTodo.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

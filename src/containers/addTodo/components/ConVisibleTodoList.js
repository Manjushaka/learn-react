import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleTodo, VisibilityFilters } from '../actions';
import TodoList from './TodoList';

const getVisibleTodos = (todos, filter) => {
  console.log('visible todo list connect: get todos.');
  switch (filter) {
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)

    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)

    case VisibilityFilters.SHOW_ALL:

    default:
      return todos;
  }
}

// 这里任何整体state的变化，都会监听到。实际上除了addtodo相关的，其他的state变化无须监听，会引起不必要的计算。可以使用reselect计算衍生数据。
const mapStateToProps = state => ({
  todos: getVisibleTodos(state.addTodo.todos, state.addTodo.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

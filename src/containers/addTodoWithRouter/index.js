import React from 'react';
import ConAddTodo from './components/ConAddTodo';
import ConVisibleTodoList from './components/ConVisibleTodoList';
import Footer from './components/Footer';
import { VisibilityFilters } from './actions';

const TodoApp = (props) => {
  console.log('todo app: ', props);
  const { match: { params }} = props;
  return (
    <div>
      <ConAddTodo />
      <ConVisibleTodoList filter={params.filter || VisibilityFilters.SHOW_ALL} />
      <Footer />
    </div>
  );
}

export default TodoApp;

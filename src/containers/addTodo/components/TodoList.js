import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = (props) => {
  console.log('todo list render: ', props);
  const { todos, toggleTodo } = props;

  return (
    <ul>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => toggleTodo(todo.id)}
        />
      )}
    </ul>
  );
}


/*class TodoList extends React.Component {
  render() {
    console.log('todo list render: ');
    const { todos, toggleTodo } = this.props;
    return (
      <ul>
        {todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => toggleTodo(todo.id)}
          />
        )}
      </ul>
    );
  }
}*/

export default TodoList;

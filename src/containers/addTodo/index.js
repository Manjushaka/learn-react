import React from 'react';
import ConAddTodo from './components/ConAddTodo';
import ConVisibleTodoList from './components/ConVisibleTodoList';
import Footer from './components/Footer';

const App = () => (
  <div>
    <ConAddTodo />
    <ConVisibleTodoList />
    <Footer />
  </div>
);

export default App;

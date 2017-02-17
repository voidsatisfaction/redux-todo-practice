import React, { Component } from 'react';

// import NavBar from './component/NavBar';
import AddTodoForm from './component/AddTodoForm';
import ShowTodos from './component/ShowTodos';

const todos = [
  { content: 'abc', toggle: 'fin' },
  { content: 'abc', toggle: 'fin' },
  { content: 'abc', toggle: 'fin' },
];

export default class App extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div>
        <h1>Redux Todo App</h1>
        <AddTodoForm />
        <ShowTodos todos={todos} />
      </div>
    );
  }
}

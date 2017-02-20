import React, { Component } from 'react';

import { connect } from 'react-redux';

import { addTodo } from './actions';

// import NavBar from './component/NavBar';
import AddTodoForm from './component/AddTodoForm';
import ShowTodos from './component/ShowTodos';

const todos = [
  { content: 'abc', completed: true },
  { content: 'abc', completed: true },
  { content: 'abc', completed: true },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.setState = this.setState.bind(this);
    this.appAddTodo = this.appAddTodo.bind(this);
    this.state = {
      text: ''
    }
  }
  appAddTodo(type, text) {
    this.props.dispatch(addTodo('ADD_TODO', this.state.text));
  }
  render() {
    console.log(this.props.state);
    return (
      <div>
        <h1>Redux Todo App</h1>
        <AddTodoForm
          addTodo={this.appAddTodo}
          setState={this.setState}
        />
        <br />
        <ShowTodos todos={todos} />
      </div>
    );
  }
}

const App2 = connect((state) => ({
  state: state,
  todos: state.todos,
  visibilityFilter: state.visibilityFilter,
}), (dispatch) => ({
  dispatch: dispatch,
}))(App)

export default App2;

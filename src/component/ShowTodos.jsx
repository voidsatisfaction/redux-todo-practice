import React, { Component } from 'react';

export default class ShowTodos extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div>
        {
          todos.map((todo, i) => (
            <div key={i}>
              <div>{todo.content}</div>
              <button>edit</button>
              <button>cancel</button>
            </div>
          ))
        }
      </div>
    );
  }
}

import React, { Component } from 'react';

export default class AddTodoForm extends Component {
  render() {
    const { addTodo, setState } = this.props;
    console.log(this.props);
    return (
      <div>
        <input onChange={(value) => setState({text: value.target.value})} type="text" />
        <button onClick={addTodo}>Add</button>
      </div>
    );
  }
}

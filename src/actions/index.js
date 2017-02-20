export const ADD_TODO = 'ADD_TODO';

export const addTodo = (type, payloads) => {
  return {
    type: ADD_TODO,
    payloads: {
      text: payloads,
    }
  }
};

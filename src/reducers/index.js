import { ADD_TODO } from '../actions/'

const initialState = {
  visibilityFilter: 'SHOW_ALL',
  todos: [],
};

const todoApp = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.payloads.text,
            completed: false,
          }
        ]
      })
      break;
    default:
      return state;
      break;
  }
}

export default todoApp;

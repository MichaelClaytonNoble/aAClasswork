import {ADD_TODO} from '../actions/todo_action'
import {ADD_TODOS} from '../actions/todos_action'


const todosReducer = (oldState = {}, action) => {

    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);

    switch (action.type) {
      case ADD_TODOS:
          nextState[action.todos.id]= action.todos;
          return nextState;

      case ADD_TODO:
          nextState[action.todo.id] = action.todo;
          return nextState;

      default:
          return oldState;
    }

}

export default todosReducer;
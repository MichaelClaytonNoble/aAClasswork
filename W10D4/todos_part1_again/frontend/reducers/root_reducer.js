import todosReducer from './todos_reducer';
import {combineReducers} from 'redux';
import stepsReducer from './steps_reducer';


const rootReducer = combineReducers({
  todos: todosReducer,
  steps: stepsReducer
});

export default rootReducer;
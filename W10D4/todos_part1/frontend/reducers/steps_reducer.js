import {ADD_STEP, REMOVE_STEP} from '../actions/step_action';

const stepsReducer = (oldState = {}, action) => {

  Object.freeze(oldState);
  const nextState = Object.assign({}, oldState);

  switch (action.type) {
    case ADD_STEP:
      nextState[action.step.id] = action.step;
      return nextState;
    case REMOVE_STEP:
      delete nextState[action.step.id];
      return nextState;
    default: 
      return oldState;
  }
}
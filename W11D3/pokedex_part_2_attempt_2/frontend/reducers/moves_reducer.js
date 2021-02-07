import {RECEIVE_ONE_POKEMON} from '../actions/pokemon_actions';

const movesReducer = (state = {}, action) => {

  Object.freeze(state);
  
  let nextState = Object.assign({}, state);
  switch (action.type){
    case RECEIVE_ONE_POKEMON:
      console.log(`moves: ${action.payload.moves}`);
      nextState = action.payload.moves;
      return nextState;
    default: 
      return state;
  };
}

export default movesReducer;
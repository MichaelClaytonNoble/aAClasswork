import * as pokemon_action_types from '../actions';

export const pokemonReducer = (state, action) =>{

  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch(action.type){

    case pokemon_action_types.RECEIVE_ALL_POKEMON:
      action.pokemon.forEach( (poke) =>{
        nextState[poke.id] = poke;
      });
      return nextState;
    default: 
      return state;
  };
}
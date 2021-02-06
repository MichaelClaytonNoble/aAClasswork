import * as pokemon_action_types from '../actions/pokemon_actions';

export const pokemonReducer = (state, action) =>{

  if( !state ) return {};
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch(action.type){

    case pokemon_action_types.RECEIVE_ALL_POKEMON:
      // Object.values(action.pokemon).forEach( (poke) =>{
      //   nextState[poke.id] = poke;
      // });
      return Object.assign(nextState, action.pokemon, state);
      // return nextState;
    default: 
      return state;
  };
}
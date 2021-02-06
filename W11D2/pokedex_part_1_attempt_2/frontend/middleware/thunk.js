import { receiveAllPokemon } from '../actions/pokemon_actions';
import * as api_utils from '../util/api_util';

export const requestAllPokemon = () => (dispatch) => {

  return (
    api_utils.fetchAllPokemon().then( pokemon => dispatch(receiveAllPokemon(pokemon)))
  );
}

window.requestAllPokemon = requestAllPokemon;
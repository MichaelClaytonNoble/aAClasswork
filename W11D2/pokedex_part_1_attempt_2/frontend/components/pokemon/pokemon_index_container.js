import {connect} from 'react-redux';
import PokemonIndex from './pokemon_index';

import * as pokemon_actions from '../../actions/pokemon_actions';
import * as selectors from '../../reducers/selectors';

const mapStateToProps = state => {

  return ({
    pokemon: selectors.selectAllPokemon(state)
  });
};


const mapDispatchToProps = dispatch => {

  return ({
    requestAllPokemon: ()=>dispatch( pokemon_actions.requestAllPokemon())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);
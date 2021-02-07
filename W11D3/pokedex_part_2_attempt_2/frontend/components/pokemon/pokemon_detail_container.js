
import {connect} from 'react-redux';
import {selectPokemonMoves} from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail';
import {receiveOnePokemon} from '../../actions/pokemon_actions';

const mapStateToProps = (state, ownProps) =>{

  //we access 
  return ({
    moves: selectPokemonMoves(state),
    items: Object.values(state.entities.items),
    pokemon: state.entities.pokemon[ownProps.match.params.id]
  });

}

const mapDispatchToProps = (dispatch) => {
  return ({
    requestPokemonMoves: (pokemonId)=> dispatch(receiveOnePokemon(pokemonId)) 
  });
}

const PokemonDetailContainer = connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);

export default PokemonDetailContainer;

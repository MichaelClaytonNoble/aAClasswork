
import {connect} from 'react-redux';
import {selectPokemonMoves} from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state) =>{

  return ({
    moves: selectPokemonMoves(state)
  });

}

const mapDispatchToProps = (dispatch) => {
  return ({
    requestPokemonMoves: (id)=> dispatch(receiveOnePokemon(id)) 
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)
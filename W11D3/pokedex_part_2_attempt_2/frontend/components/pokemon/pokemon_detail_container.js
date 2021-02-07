
import {connect} from 'react-redux';
import 

const mapStateToProps = (state) =>{

}

const mapDispatchToProps = (dispatch) => {

  return ({
    requestPokemonMoves: (id)=> dispatch(receiveOnePokemon(id)) 
  })
}
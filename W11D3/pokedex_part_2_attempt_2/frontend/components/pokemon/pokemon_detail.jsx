import React from 'react';


class PokemonDetail extends React.Component{
  constructor(props){
    super(props);

  }
  componentDidMount() {
    this.props.requestPokemonMoves(this.props.match.params.id);
  }
  componentDidUpdate(prevProps){
    if( prevProps.match.params.pokemonId != this.props.match.params.pokemonId){
      this.props.requestOnePokemon(this.props.match.params.pokemonId);
    }
  }
  render(){
    if( !this.props.pokemon) return null; 
    return (
      <li className="pokemon-detail" key={pokemon.id}>
        <img src={pokemon.imageUrl} />
        <span className="pokemon-detail-name">{pokemon.name}</span>
        Type: {pokemon.type}
        Attack: {pokemon.attack}
        Defense: {pokemon.defense}
        Moves: {moves.map( move=>{
          {move.name}
        })}
        Items: <img src={items.imageUrl}></img>
      </li>
    )
  }
} 


export default PokemonDetail;
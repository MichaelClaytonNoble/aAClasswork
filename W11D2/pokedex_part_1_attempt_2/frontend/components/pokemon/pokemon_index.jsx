import React from 'react';

class PokemonIndex extends React.Component{
  constructor(props){
    super(props);
  };
  componentDidMount(){
    this.props.requestAllPokemon();
  }
  render(){
    let {pokemon} = this.props;
    pokemon = pokemon || [];
    return (
      <ul className="pokemon-index">
      {
        pokemon.map( poke => {
          return (
            <li key={poke.id} className="pokemon-index-item">
              {poke.name}
              <img src={poke.imageUrl}></img>
            </li>
          )
        })
        
      }
      </ul>
    );
  };
}

export default PokemonIndex;
import React from 'react';


const PokemonDetail = ({poke}) => {

    return (
      <li className="pokemon-detail" key={poke.id}>
        <span>{poke.id}</span>
        <img src={poke.imageUrl} />
        <span>{poke.name}</span>
      </li>
    )
} 



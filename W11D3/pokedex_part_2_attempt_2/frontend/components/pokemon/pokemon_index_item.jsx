import React from 'react';

export const PokemonIndexItem = ( {poke}) => {


  return (
    <li className="pokemon-index-item" key={poke.id}>
      <span>{poke.id}</span>
      <img src={poke.imageUrl} />
      <span>{poke.name}</span>
    </li>
  )

}


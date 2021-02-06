import React from 'react';

import {Link} from 'react-router-dom';

export const PokemonIndexItem = ( {poke}) => {
  return (
    <Link to={`/pokemon/${poke.id}`}>

      <li className="pokemon-index-item" key={poke.id}>
        <span>{poke.id}</span>
        <img src={poke.imageUrl} />
        <span>{poke.name}</span>
      </li>
    </Link>
  )

}


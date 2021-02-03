import React from 'react';

const PokemonIndexItem = ({pokemon}) =>{
    return (
        <li>
            {pokemon.name}
            {pokemon.image_url}
        </li>
    )
}
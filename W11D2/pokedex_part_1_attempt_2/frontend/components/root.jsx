import React from 'react';
import {Provider} from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';

const Root = ({store})=>(
  <div className="pokedex">

  <Provider store={store}>
    <PokemonIndexContainer />
  </Provider>
  </div>
);

export default Root;
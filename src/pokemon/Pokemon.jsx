import React from 'react';

import PageHeader from '../template/pageHeader';
import PokemonForm from './PokemonForm';
import PokemonList from './PokemonList';

export default () => (
  <div>
    <PageHeader name='Pokémons' small='lista de pokémons'/>
    <PokemonForm/>
    <PokemonList/>
  </div>
)

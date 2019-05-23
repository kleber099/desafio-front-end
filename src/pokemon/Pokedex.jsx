import React from 'react';

import PageHeader from '../template/pageHeader';
import PokemonListCapture from './PokedexList';
import PokemonDetail from "./PokemonDetail";

export default () => (
  <div>
    <PageHeader name='Pokédex' small='pokémons capturados'/>
    <PokemonListCapture/>
    <PokemonDetail/>
  </div>
);

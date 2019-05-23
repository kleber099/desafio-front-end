import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';

import Pokemon from '../pokemon/Pokemon'
import PokemonCapture from '../pokemon/Pokedex'

export default props => (
  <Switch>
    <Route path='/pokemons' component={Pokemon}/>
    <Route path='/pokedex' component={PokemonCapture}/>
    <Redirect to="/pokemons"  />
  </Switch>
)
import React from 'react'
import {Link} from 'react-router-dom';

export default props => (
  <nav className='navbar navbar-inverse bg-inverse'>
    <div className='container'>
      <div className='navbar-header'>
        <Link className='navbar-brand' to='/pokemons'>
          <i className='fa fa-calendar-check-o'></i> PokeApp
        </Link>
      </div>
      <div id='navbar' className='navbar-collapse collapse'>
        <ul className="nav navbar-nav">
          <li><Link to='/pokemons'>Pokémons</Link></li>
          <li><Link to='/pokedex'>Pokédex</Link></li>
        </ul>
      </div>
    </div>
  </nav>
)
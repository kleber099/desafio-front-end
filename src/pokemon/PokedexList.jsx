import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import IconButton from '../template/iconButton'
import { freePokemon, detailPokemon } from './pokemonActions'

const PokemonList = props => {
  const renderRows = () => {
    let list = props.list || [];
    list = list.slice();
    list = list.filter(item => item.capture);

    return list.map((pokemon) => (
      <tr key={pokemon.number}>
        <td>{ pokemon.number }</td>
        <td>{pokemon.name}</td>
        <td>
          <IconButton style="warning" icon="arrow-up"
                      onClick={() => props.freePokemon(pokemon)}></IconButton>
          <IconButton style="info" icon="list-alt"
                      onClick={() => props.detailPokemon(pokemon)}></IconButton>
        </td>
      </tr>
    ));
  };

  return (
    <table className="table">
      <thead>
      <tr>
        <td>Número</td>
        <td>Descrição</td>
        <td className="tableActions">Ações</td>
      </tr>
      </thead>
      <tbody>
      {renderRows()}
      </tbody>
    </table>
  )
};

const mapStateToProps = state => ({ list: state.pokemon.list });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ freePokemon, detailPokemon }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);

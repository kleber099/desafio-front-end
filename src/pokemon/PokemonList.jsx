import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import IconButton from '../template/iconButton';
import {capturePokemon, listPokemons } from './pokemonActions';

class PokemonList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.list.length === 0) {
      this.props.listPokemons();
    }
  }

  renderRows() {
    let list = this.props.list || [];
    list = list.slice();
    const {description} = this.props;

    if (description !== '') {
      list = list.filter(item => item.name.indexOf(description) != -1 || item.number === parseInt(description));
    }

    list = list.filter(item => !item.capture);

    return list.map((pokemon) => (
      <tr key={pokemon.number}>
        <td>{pokemon.number}</td>
        <td>{pokemon.name}</td>
        <td>
          <IconButton style="success" icon="arrow-down"
                      onClick={() => this.props.capturePokemon(pokemon)}></IconButton>
        </td>
      </tr>
    ))
  }

  render() {
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
        { this.renderRows() }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({ list: state.pokemon.list, description: state.pokemon.description });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ capturePokemon, listPokemons }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';
import { changeDescription, clear} from './pokemonActions';

class PokemonForm extends Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this)
  }

  keyHandler(e) {
    const {clear} = this.props;
    if (e.key === 'Escape') {
      clear();
    }
  }

  render() {
    const { description, clear } = this.props;
    return (
      <div role="form" className="pokemonForm">
        <Grid cols="12 9 10">
          <input id="description" className="form-control" placeholder="Pesquise número ou nome"
                 onChange={this.props.changeDescription}
                 onKeyUp={this.keyHandler}
                 value={description}/>
        </Grid>

        <Grid cols="12 3 2">
          <IconButton style='primary' icon='close'
                      onClick={clear}/>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({description: state.pokemon.description});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeDescription, clear}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PokemonForm);

import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import IconButton from '../template/iconButton';
import If from '../template/if';
import Grid from "../template/grid";
import LabelRow from './components/LabelRow';
import Types from './components/Types';
import Habilitys from './components/Habilitys'

class PokemonDetail extends Component {
  constructor(props) {
    super(props);
  }

  getStats() {
    const { detail } = this.props;
    const stats = [];

    if (!_.isEmpty(detail)) {
      detail.stats.forEach(stat => stats[stat.stat.name] = stat.base_stat);
    }

    return stats;
  }

  render() {
    const { detail } = this.props;

    if (_.isEmpty(detail)) {
      return null;
    }
    const stats = this.getStats();
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Detalhes</h3>
        </div>
        <div className="panel-body">
          <div className="row">
            <Grid cols="2">
              <img src={detail.sprites.front_default} alt={detail.name} className="img-circle" />
            </Grid>
            <Grid cols="4">
              <LabelRow label="Nome" value={detail.name}/>
              <LabelRow label="Peso" value={detail.weight}/>
              <LabelRow label="Tamanho" value={detail.height}/>
            </Grid>
            <Grid cols="4">
              <LabelRow label="Velocidade" value={stats['speed']}/>
              <LabelRow label="Defesa" value={stats['defense']}/>
              <LabelRow label="Ataque" value={stats['attack']}/>
            </Grid>
            <Grid cols="2">
              <LabelRow label="Ataque" value={stats['hp']}/>
            </Grid>
          </div>
          <div className="row">
            <Grid cols="12">
              <Types pokemon={detail}/>
            </Grid>
          </div>
          <div className="row">
            <Grid cols="12">
              <Habilitys pokemon={detail}/>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ detail: state.pokemon.detail });

export default connect(mapStateToProps)(PokemonDetail);

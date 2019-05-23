import React from "react";
import Grid from "../../template/grid";

export default (props) => {
  const types = props.pokemon.abilities.map((abilitie, index) => (
    <Grid cols="2" key={index}>
      <button type="button" className="btn btn-info">{abilitie.ability.name}</button>
    </Grid>
  ));

  return (
    <div>
      Habilidades
      <strong><hr/></strong>
      { types }
    </div>
  );
}

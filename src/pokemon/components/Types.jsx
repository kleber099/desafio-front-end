import React from "react";
import Grid from "../../template/grid";

export default (props) => {
  const types = props.pokemon.types.map((type, index) => (
    <Grid cols="1" key={index}>
      <button type="button" className="btn btn-success">{type.type.name}</button>
    </Grid>
  ));

  return (
    <div>
      Tipos
      <strong><hr/></strong>
      { types }
    </div>
  );
}

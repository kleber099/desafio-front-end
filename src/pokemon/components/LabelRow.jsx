import React from "react";

export default (props) => {
  return (
    <div className="row">
      <label>{props.label}:</label> {props.value }
    </div>
  );
}

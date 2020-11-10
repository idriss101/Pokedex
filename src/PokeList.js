import React, { useState, useEffect } from "react";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import Pokemon from "./Pokemon";
import "./PokeList.css";

const styles = (theme) => ({
  toolbar: theme.mixins.toolbar,
});
function PokeList(props) {
  return (
    <div className="PokeList">
      {props.pokemons.map((pokemon) => (
        <Pokemon {...pokemon} key={pokemon.name} />
      ))}
    </div>
  );
}

export default withStyles(styles)(PokeList);

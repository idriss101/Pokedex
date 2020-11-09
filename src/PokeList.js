import React, { useState, useEffect } from "react";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import Pokemon from "./Pokemon";

const styles = (theme) => ({
  toolbar: theme.mixins.toolbar,
});
function PokeList(props) {
  return (
    <div>
      {props.pokemons.map((pokemon) => (
        <Pokemon {...pokemon} key={pokemon.name} />
      ))}
    </div>
  );
}

export default withStyles(styles)(PokeList);

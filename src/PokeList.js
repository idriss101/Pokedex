import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { withStyles } from "@material-ui/core/styles";
import Pokemon from "./Pokemon";
import "./PokeList.css";

const styles = (theme) => ({
  toolbar: theme.mixins.toolbar,
});

function PokeList(props) {
  return (
    <div className="PokeList">
      <InfiniteScroll
        dataLength={props.pokemons.length}
        next={props.typeQuery ? props.getNewTypePokemon : props.getMorePokemon}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {props.pokemons.map((pokemon) => (
          <Pokemon {...pokemon} key={pokemon.name} />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default withStyles(styles)(PokeList);

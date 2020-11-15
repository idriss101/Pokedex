import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { withStyles } from "@material-ui/core/styles";
import Pokemon from "./Pokemon";
import "./PokeList.css";

const styles = () => ({
  PokeList: {},
});

function PokeList(props) {
  return (
    <div className={props.classes.PokeList}>
      <InfiniteScroll
        dataLength={props.pokemons.length}
        next={props.typeQuery ? props.getNewTypePokemon : props.getMorePokemon}
        hasMore={true}
        loader={<div className="o-pokeball c-loader u-bounce"></div>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {props.pokemons.map((pokemon) => (
          <Pokemon {...pokemon} key={pokemon.name} />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default withStyles(styles)(PokeList);

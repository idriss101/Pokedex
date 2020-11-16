import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { withStyles } from "@material-ui/core/styles";
import Pokemon from "./Pokemon";

const styles = () => ({
  PokeList: {},
});

function PokeList(props) {
  const {
    classes,
    pokemons,
    typeQuery,
    getNewTypePokemon,
    getMorePokemon,
  } = props;
  return (
    <div className={classes.PokeList}>
      <InfiniteScroll
        dataLength={pokemons.length}
        next={typeQuery ? getNewTypePokemon : getMorePokemon}
        hasMore={true}
        loader={<div className="o-pokeball c-loader u-bounce"></div>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {pokemons.map((pokemon) => (
          <Pokemon {...pokemon} key={pokemon.name} />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default withStyles(styles)(PokeList);

import React, { useState, useEffect } from "react";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import Pokemon from "./Pokemon";

const styles = (theme) => ({
  toolbar: theme.mixins.toolbar,
});
function PokeList(props) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const firstRes = await axios.get("https://pokeapi.co/api/v2/pokemon/");
      const secondRes = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/2/`
      );
      console.log(secondRes);
      setPokemons(firstRes.data.results);
    };
    getData();
  }, []);

  //   console.log(pokemons);

  return (
    <div>
      {pokemons.map((pokemon) => (
        <Pokemon {...pokemon} key={pokemon.name} />
      ))}
    </div>
  );
}

export default withStyles(styles)(PokeList);

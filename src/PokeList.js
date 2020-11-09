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
      const pokemons = [];
      firstRes.data.results.forEach(async (pokemon) => {
        const secondRes = await axios.get(pokemon.url);
        pokemons.push(secondRes.data);
      });
      setPokemons(pokemons);
    };
    getData();
  }, []);

  console.log(pokemons);

  return (
    <div>
      {pokemons.map((pokemon) => (
        <Pokemon />
      ))}
    </div>
  );
}

export default withStyles(styles)(PokeList);

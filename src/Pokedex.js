import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "./Sidebar";
import PokeList from "./PokeList";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const firstRes = await axios.get("https://pokeapi.co/api/v2/pokemon/");
      setPokemons(firstRes.data.results);
    };
    getData();
  }, []);

  const getNewPokemon = async (type) => {
    const firstRes = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
    const newPokemon = firstRes.data.pokemon.slice(0, 19);
    const pokemons = [];
    newPokemon.forEach((pokemon) => {
      const data = {
        name: pokemon.pokemon.name,
        url: pokemon.pokemon.url,
      };
      pokemons.push(data);
    });
    setPokemons(pokemons);
  };
  return (
    <div>
      <SideBar getNewPokemon={getNewPokemon} />
      <PokeList pokemons={pokemons} />
    </div>
  );
}

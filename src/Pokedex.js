import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "./Sidebar";
import PokeList from "./PokeList";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [typeQuery, setTypeQuery] = useState(false);
  const [type, setType] = useState("");

  useEffect(() => {
    const getData = async () => {
      const firstRes = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?offset=${pageIndex}&limit=10`
      );
      setPokemons(firstRes.data.results);
      setPageIndex(0);
    };
    getData();
  }, []);

  const getMorePokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${pageIndex}&limit=10`;
    const firstRes = await axios.get(url);
    setPageIndex((prev) => {
      return prev + 10;
    });
    const secondRes = await axios.get(firstRes.data.next);
    console.log(secondRes);
    setPokemons((prevPokemon) => {
      return [...prevPokemon, ...secondRes.data.results];
    });
  };

  const getNewTypePokemon = async () => {
    const firstRes = await axios.get(
      `https://pokeapi.co/api/v2/type/${type}/?offset=${
        pageIndex + 10
      }&limit=10`
    );
    const newPokemon = firstRes.data.pokemon;
    const pokemons = [];
    newPokemon.forEach((pokemon) => {
      const data = {
        name: pokemon.pokemon.name,
        url: pokemon.pokemon.url,
      };
      pokemons.push(data);
    });
    setPokemons((prev) => {
      return [...prev, ...pokemons];
    });
    console.log(pokemons);
  };

  const getNewPokemon = async (type) => {
    setTypeQuery(true);
    setType(type);
    setPageIndex(0);
    const firstRes = await axios.get(
      `https://pokeapi.co/api/v2/type/${type}/?offset=${pageIndex}&limit=10`
    );
    const newPokemon = firstRes.data.pokemon;
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
      <PokeList
        pokemons={pokemons}
        getMorePokemon={getMorePokemon}
        getNewTypePokemon={getNewTypePokemon}
        typeQuery={typeQuery}
      />
    </div>
  );
}

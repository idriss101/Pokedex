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
    setPageIndex((prev) => {
      return prev + 10;
    });
    const firstRes = await axios.get(
      `https://pokeapi.co/api/v2/type/${type}/?offset=${pageIndex}&limit=10`
    );

    const newPokemon = firstRes.data.pokemon.slice(
      pageIndex + 10,
      pageIndex + 20
    );
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
    // console.log(pokemons);
  };

  const typeColors = (type) => {
    switch (type.toLowerCase()) {
      case "grass":
        return "#7FC02A";
        break;
      case "normal":
        return "#A8A8A8";
        break;
      case "fighting":
        return "#C03028";
        break;
      case "flying":
        return "#9ABEF7";
        break;
      case "poison":
        return "#A040A3";
        break;
      case "ground":
        return "#E0B668";
        break;
      case "rock":
        return "#B8A05E";
        break;
      case "bug":
        return "#CCCA5A";
        break;
      case "ghost":
        return "#705DA5";
        break;
      case "steel":
        return "#6D8F9C";
        break;
      case "fire":
        return "#F08030";
        break;
      case "water":
        return "#689EF4";
        break;
      case "electric":
        return "#C09643";
        break;
      case "psychic":
        return "#EB2D77";
        break;
      case "ice":
        return "#98D8D8";
        break;
      case "dragon":
        return "#7038F8";
        break;
      case "dark":
        return "#504843";
        break;
      case "fairy":
        return "#F09AD9";
        break;
      default:
        return "#A39F99";
    }
  };

  const getNewPokemon = async (type) => {
    setTypeQuery(true);
    setType(type);
    setPageIndex(0);
    const firstRes = await axios.get(
      `https://pokeapi.co/api/v2/type/${type}/?offset=${pageIndex}&limit=10`
    );
    const newPokemon = firstRes.data.pokemon.slice(pageIndex, pageIndex + 10);
    const pokemons = [];
    newPokemon.forEach((pokemon) => {
      const data = {
        name: pokemon.pokemon.name,
        url: pokemon.pokemon.url,
      };
      pokemons.push(data);
    });
    setPokemons(pokemons);
    console.log(pokemons);
  };
  return (
    <div style={{ position: "relative" }}>
      <SideBar
        getNewPokemon={getNewPokemon}
        setPokemons={setPokemons}
        setPageIndex={setPageIndex}
        typeColors={typeColors}
      />
      <PokeList
        pokemons={pokemons}
        getMorePokemon={getMorePokemon}
        getNewTypePokemon={getNewTypePokemon}
        typeQuery={typeQuery}
      />
    </div>
  );
}

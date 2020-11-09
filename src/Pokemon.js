import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Pokemon.css";

export default function Pokemon(props) {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const firstRes = await axios.get(props.url);
      setPokemon(firstRes.data);
      setLoading(false);
    };
    getData();
  }, []);

  console.log(pokemon);

  if (loading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }
  return (
    <div className="Pokemon">
      <div className="Pokemon-main">
        <img src={pokemon.sprites.front_default} alt="" />
        <h2>{pokemon.name}</h2>
        <p>Pokemon Species</p>
        <p>Pokemon Types</p>
        <p>more info</p>
      </div>
    </div>
  );
}

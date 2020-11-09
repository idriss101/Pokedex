import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Pokemon.css";

export default function Pokemon(props) {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const firstRes = await axios.get(props.url);
      const secondRes = await axios.get(firstRes.data.species.url);
      //   console.log(secondRes);
      setPokemon(firstRes.data);
      setLoading(false);
    };
    getData();
  }, []);

  //   console.log(pokemon);

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
        <ul className="Pokemon-main--types">
          {pokemon.types.map((type) => (
            <li>{type.type.name}</li>
          ))}
        </ul>
        <ul>
          {pokemon.abilities.map((ability) => (
            <li>{ability.ability.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

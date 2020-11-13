import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MoreInfo.css";

export default function MoreInfo(props) {
  const [evolutions, setEvolutions] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const firstRes = await axios.get(
        `https://pokeapi.co/api/v2/evolution-chain/${props.pokemon.id}`
      );
      const data = firstRes.data.chain.evolves_to;
      const names = [];
      data.map((name) => {
        names.push(name.species.name);
        name.evolves_to.map((name) => {
          names.push(name.species.name);
        });
      });
      names.map(async (name) => {
        const secondRes = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        setEvolutions((prev) => {
          return [...prev, secondRes.data];
        });
      });
    };
    getData();
  }, []);

  //   console.log(evolutions);

  //   console.log(props.pokemon);
  return (
    <div className="MoreInfo">
      {/* <div className="evolution">
        <div className="evolution-pokemon">
          <img src={props.pokemon.sprites.front_default} alt=" " />
          <p id="pokemon-id">#00{props.pokemon.id}</p>
          <h4>{props.pokemon.name}</h4>
          {props.pokemon.types.map((type) => (
            <p id="pokemon-type" key={type.type.name}>
              {type.type.name}
            </p>
          ))}
        </div>
        {evolutions.map((evolution) => (
          <div className="evolution-pokemon">
            <img src={evolution.sprites.front_default} alt=" " />
            <p id="pokemon-id">#00{evolution.id}</p>
            <h4>{evolution.name}</h4>
            {evolution.types.map((type) => (
              <p id="pokemon-type" key={type.type.name}>
                {type.type.name}
              </p>
            ))}
          </div>
        ))}
      </div> */}
      <div className="moves-list">
        <h3>Moves list</h3>
        <div className="move-wrap">
          <ul>
            {props.pokemon.moves.slice(0, 50).map((move) => (
              <li key={move.move.name}>
                <div className="move">{move.move.name}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

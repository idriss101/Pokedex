import axios from "axios";
import React, { useState, useEffect } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core/styles";
import "./Pokemon.css";

const styles = () => ({
  progress: {
    height: "10px",
  },
  title: {
    color: "red",
  },
});

function Pokemon(props) {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const firstRes = await axios.get(props.url);
      //   const secondRes = await axios.get(firstRes.data.species.url);
      //   console.log(secondRes);
      setPokemon(firstRes.data);
      setLoading(false);
    };
    getData();
  }, []);

  const normalise = (value) => {
    return (value / 200) * 100;
  };

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

      <div className="Pokemon-stats">
        <table cellSpacing="15px">
          <tbody>
            {pokemon.stats.map((stat) => (
              <>
                <tr>
                  <td>{stat.stat.name}</td>
                  <td>{stat.base_stat}</td>
                  <td style={{ width: "100%" }}>
                    <LinearProgress
                      color="secondary"
                      value={normalise(stat.base_stat)}
                      variant="determinate"
                    />
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default withStyles(styles)(Pokemon);

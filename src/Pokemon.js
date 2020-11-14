import axios from "axios";
import React, { useState, useEffect } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./Pokemon.css";
import ProgressBar from "./ProgressBar";
import MoreInfo from "./MoreInfo";
import styles from "./styles/PokemonStyles";

function Pokemon(props) {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const firstRes = await axios.get(props.url);
      setPokemon(firstRes.data);
      setLoading(false);
    };
    getData();
  }, []);

  const normalise = (value) => {
    return (value / 200) * 100;
  };

  const statColors = (stat) => {
    if (normalise(stat) <= 20) {
      return `red`;
    } else if (normalise(stat) <= 50) {
      return "orange";
    } else {
      return "green";
    }
  };

  const MoreDetails = () => {
    setShowMore(true);
  };

  const LessDetails = () => {
    setShowMore(false);
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

  function insertDecimal(num) {
    return Number((num / 10).toFixed(2));
  }

  // eslint-disable-next-line no-extend-native
  Number.prototype.pad = function (size) {
    var s = String(this);
    while (s.length < (size || 3)) {
      s = "0" + s;
    }
    return s;
  };

  if (loading) {
    return <div className="o-pokeball c-loader u-bounce"></div>;
  }
  const { classes } = props;
  return (
    <div className={classes.Pokemon}>
      <div className={classes.PokemonMain}>
        <img src={pokemon.sprites.front_default} alt="" />
        <div className={classes.PokemonId}>
          <p>#{pokemon.id.pad()}</p>
        </div>
        <div
          className={`${classes.PokemonExtraStats} ${classes.PokemonHeight} `}
        >
          <p>{insertDecimal(pokemon.height)}m</p>
        </div>
        <div
          className={`${classes.PokemonExtraStats} ${classes.PokemonWeight} `}
        >
          <p>{insertDecimal(pokemon.weight)}kg</p>
        </div>
        <h2>{pokemon.name}</h2>
        <ul className={classes.PokemonMainTypes}>
          {pokemon.types.map((type) => {
            const color = typeColors(type.type.name);
            return (
              <li
                key={type.type.name}
                className={classes.pokemonType}
                style={{ color: color, fontWeight: "500" }}
              >
                {type.type.name}
              </li>
            );
          })}
        </ul>
        <ul>
          {pokemon.abilities.map((ability) => (
            <li key={ability.name}>{ability.ability.name}</li>
          ))}
        </ul>
      </div>

      <div className={classes.PokemonStats}>
        <table cellSpacing="15px">
          <tbody>
            {pokemon.stats.map((stat) => (
              <>
                <tr key={stat.stat.name}>
                  <td>{stat.stat.name}</td>
                  <td>{stat.base_stat}</td>
                  <td style={{ width: "100%" }}>
                    <ProgressBar
                      value={normalise(stat.base_stat)}
                      statColors={statColors}
                      baseStat={stat.base_stat}
                    />
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
      {showMore ? (
        <div className={classes.PokemonMoreInfo}>
          <Button
            variant="contained"
            color="primary"
            onClick={LessDetails}
            style={{
              backgroundColor: "#70C6C7",
              margin: "10px",
              fontWeight: "700",
            }}
          >
            Less Details
          </Button>
          <MoreInfo pokemon={pokemon} />
        </div>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={MoreDetails}
          style={{
            backgroundColor: "#70C6C7",
            margin: "10px",
            fontWeight: "700",
          }}
        >
          More Details
        </Button>
      )}
    </div>
  );
}

export default withStyles(styles)(Pokemon);

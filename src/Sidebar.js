import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SideBar.css";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";

const drawerWidth = 240;

const styles = () => ({
  btns: {
    width: "100%",
    borderRadius: "5px",
    paddingTop: "5px",
    paddingBottom: "5px",
    border: "none",
    backgroundColor: "#EEEEEE",
  },
  appBar: {
    backgroundColor: "#CC0000",
  },
  btnText: {
    fontSize: "14px",
    fontWeight: "600",
  },
});

function Sidebar(props) {
  const [open, setOpen] = useState(false);
  const [pokemonTypes, setPokemonTypes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("https://pokeapi.co/api/v2/type");
      setPokemonTypes(data.data.results);
    };
    getData();
  }, []);

  const showAll = async () => {
    const firstRes = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10`
    );
    props.setPokemons(firstRes.data.results);
    props.setPageIndex(0);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (e) => {
    props.getNewPokemon(e.target.textContent);
    setOpen(false);
  };
  return (
    <div className="SideBar">
      <AppBar
        position="sticky"
        color="secondary"
        className={props.classes.appBar}
      >
        <Toolbar>
          <IconButton onClick={handleOpen} color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Pokedex
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor="left" open={open} width={"50%"}>
        <IconButton onClick={handleClose}>
          <ChevronLeftIcon />
        </IconButton>
        <Divider />
        <List>
          <ListItem>
            <Button
              variant="outlined"
              className={props.classes.btns}
              onClick={showAll}
            >
              <ListItemText classes={{ primary: props.classes.btnText }}>
                All
              </ListItemText>
            </Button>
          </ListItem>
          {pokemonTypes.map((type) => (
            <ListItem key={type.name}>
              <Button
                variant="outlined"
                className={props.classes.btns}
                onClick={handleClick}
              >
                <ListItemText classes={{ primary: props.classes.btnText }}>
                  {type.name}
                </ListItemText>
              </Button>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default withStyles(styles)(Sidebar);

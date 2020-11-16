import React, { useState, useEffect } from "react";
import axios from "axios";
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
import Button from "@material-ui/core/Button";
import SideBarBtn from "./SideBarBtn";
import Slide from "@material-ui/core/Slide";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import styles from "./styles/SideBarStyles";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

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
      <HideOnScroll {...props}>
        <AppBar
          position="sticky"
          color="secondary"
          className={props.classes.appBar}
        >
          <Toolbar>
            <IconButton onClick={handleOpen} color="inherit">
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" noWrap>
              Pokedex
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

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
              <p
                style={{
                  padding: "0",
                  margin: "0",
                  fontWeight: "700",
                  color: "#A39F99",
                }}
              >
                All
              </p>
            </Button>
          </ListItem>
          {pokemonTypes.map((type) => (
            <ListItem key={type.name}>
              <SideBarBtn
                handleClick={handleClick}
                color={props.typeColors(type.name)}
                name={type.name}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default withStyles(styles)(Sidebar);

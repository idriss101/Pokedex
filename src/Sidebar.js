import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SideBar.css";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import App from "./App";
import Button from "@material-ui/core/Button";

const drawerWidth = 240;

const styles = () => ({
  btns: {
    width: "100%",
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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="SideBar">
      <AppBar position="sticky" color="secondary">
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
        <List>
          {pokemonTypes.map((type) => (
            <ListItem key={type.name}>
              <Button variant="outlined" className={props.classes.btns}>
                <ListItemText>{type.name}</ListItemText>
              </Button>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default withStyles(styles)(Sidebar);

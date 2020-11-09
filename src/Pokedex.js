import React, { Component } from "react";
import SideBar from "./Sidebar";
import PokeList from "./PokeList";

export default class Pokedex extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <PokeList />
      </div>
    );
  }
}

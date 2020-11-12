import React from "react";
import "./MoreInfo.css";

export default function MoreInfo() {
  return (
    <div className="MoreInfo">
      <div className="evolution">
        <div className="evolution-pokemon">
          <img src="" alt=" " />
          <p id="pokemon-id">#004</p>
          <h4>Pokemon Name</h4>
          <p id="pokemon-type">Pokemon Type</p>
        </div>
      </div>
      <div className="moves-list">
        <h3>Moves list</h3>
        <div className="move-wrap">
          <ul>
            <li>
              <div className="move">Move</div>
            </li>
            <li>
              <div className="move">Move</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

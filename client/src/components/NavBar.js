import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../logo.svg";

function NavBar() {
  return (
    <div className="NavBar">
      <img src={logo} className="App-logo" alt="logo" as={Link} to="/" />
      <div className="NavBar-Links">
        <a
          className="App-Links"
          href="./components/Home.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Home
        </a>
        <a
          className="App-Links"
          href="./components/Dashboard.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dashboard
        </a>
        <a
          className="App-Links"
          href="./components/CharacterCreation.js"
          target="_blank"
          rel="noopener norefferer"
        >
          CharacterCreation
        </a>
        <a
          className="App-Links"
          href="./components/CharacterSheets.js"
          target="_blank"
          rel="noopener norefferer"
        >
          CharacterSheets
        </a>
      </div>
    </div>
  );
}

export default NavBar;

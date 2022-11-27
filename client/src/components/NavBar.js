import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

import logo from "../logo.svg";

function AppNavBar() {
  return (
    <div className="NavBar">
      <img src={logo} className="App-logo" alt="logo" as={Link} to="/" />
      <div className="NavBar-links">
        <a
          className="App-link"
          href="./components/Tools.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tools
        </a>
        <a
          className="App-link"
          href="./components/Profile.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Profile
        </a>
      </div>
    </div>
  );
}

export default AppNavBar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

import logo from "../logo.svg";

function NavBar() {
  return (
    <div className="NavBar">
      <img src={logo} className="App-logo" alt="logo" as={Link} to="/" />
      <div className="NavBar-Links">
        <a
          className="App-Links"
          href="./components/Tools.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tools
        </a>
        <a
          className="App-Links"
          href="./components/Profile.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Profile
        </a>
        <a
          className="App-Links"
          href="./components/Account.js"
          target="_blank"
          rel="noopener norefferer"
        >
          Login/Signup
        </a>
      </div>
    </div>
  );
}

export default NavBar;

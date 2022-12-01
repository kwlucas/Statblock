import React from "react";
import { Link } from "react-router-dom";

// Importing Authorization
import Auth from "../utils/auth";

// Importing Navbar Logo
import logo from "../logo.svg";

const NavBar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div className="NavBar">
      <Link>
        <img src={logo} className="App-logo" alt="logo" to="/" />
      </Link>
      <Link className="App-links" to="/">
        Home
      </Link>
      <div>
        {Auth.loggedIn() ? (
          <>
            <Link className="App-links" to="/dashboard">
              Dashboard
            </Link>
            <Link className="App-links" to="/characterCreation">
              Create Character
            </Link>
            <Link className="App-links" to="/characterSheet">
              Your Character
            </Link>
            <button className="App-links" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="App-links" to="/login">
              Login
            </Link>
            <Link className="App-links" to="/signup">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;

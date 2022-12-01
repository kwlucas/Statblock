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
      <div className="App-links-section">
        <Link className="App-links1" to="/">
          Home
        </Link>
        <Link className="App-links2" to="/dashboard">
          Dashboard
        </Link>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="App-links3" to="/characterCreation">
                Create Character
              </Link>
              <Link className="App-links4" to="/characterSheet">
                Your Character
              </Link>
              <button className="App-links5" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <div className="login-signup-section">
                <Link className="App-links6" to="/login">
                  Login
                </Link>
                <div className="divider">/</div>
                <Link className="App-links7" to="/signup">
                  Sign Up
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

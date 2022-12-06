import React from "react";
import { Link } from "react-router-dom";

// Importing Authorization
import Auth from "../utils/auth";

// Importing Navbar Logo
import logo from "../img/logo.png";

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
          HOME
        </Link>
        <Link className="App-links2" to="/dashboard">
          DASHBOARD
        </Link>
        {/* <Link className="App-links3" to="/dashboard">
          RESOURCES
        </Link> */}
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="App-links4" to="/characterCreate">
                + CHARACTER
              </Link>
              <Link className="App-links5" to="/characterSheet">
                YOUR CHARACTER
              </Link>
              <button className="logout-link" onClick={logout}>
                LOGOUT
              </button>
            </>
          ) : (
            <>
              <div className="login-signup-section">
                <Link className="App-links7" to="/login">
                  Login
                </Link>
                <div className="divider">/</div>
                <Link className="App-links8" to="/signup">
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

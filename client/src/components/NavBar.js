import { Link } from "react-router-dom";

import logo from "../logo.svg";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

function NavBar() {
  return (
    <div className="NavBar">
      <img src={logo} className="App-logo" alt="logo" as={Link} to="/" />
      <div className="NavBar-Links">
        <a
          className="App-Links"
          href={Home}
          as={Link}
          rel="noopener noreferrer"
        >
          Home
        </a>
        <a
          className="App-Links"
          href={Dashboard}
          as={Link}
          rel="noopener noreferrer"
        >
          Dashboard
        </a>
      </div>
    </div>
  );
}

export default NavBar;

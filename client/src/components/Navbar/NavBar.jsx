import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  let navbarClass = "darkNav";

  return (
    <div className={navbarClass}>
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/about">
        <p>About</p>
      </Link>
    </div>
  );
};

export default NavBar;

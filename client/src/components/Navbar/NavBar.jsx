import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  let navbarClass = "darkNav";

  return (
    <div className={navbarClass}>
      <div className="linkRoutes">
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/about">
        <p>About</p>
      </Link>
      <Link to="/form">
        <p>Form</p>
      </Link>
      </div>
    </div>
  );
};

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css";

const NavBar = () => {
  let navbarClass = "darkNav";

  return (
    <div className={navbarClass}>
      <div className="linkRoutes">
      <Link to="/home">
        <p className="link"> Home </p>
      </Link>
      <Link to="/about">
        <p className="link"> About </p>
      </Link>
      <Link to="/form">
        <p className="link"> Form </p>
      </Link>
      </div>
      <SearchBar />
    </div>
  );
};

export default NavBar;

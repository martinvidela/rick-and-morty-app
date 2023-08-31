import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";

export const Nav = ({ searchHandler, randomHandler, handleClear }) => {
 
  const location = useLocation();
  const comenzar = location.pathname === "/";
  if (comenzar) {
    return null;
  }
  return (
    <div className="containerNav">
      <div>
        <Link to="/favorites" className="controls" >
          Favorites
        </Link>
        <Link to="/home" className="controls">
          Home
        </Link>
      </div>

      <SearchBar searchHandler={searchHandler} />
      <div>
        <button className="controls" onClick={randomHandler}>
          {" "}
          Random{" "}
        </button>
        <button className="controls" onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

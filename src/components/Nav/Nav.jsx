import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import "./Nav.css";

export const Nav = ({ searchHandler, randomHandler }) => {
  return (
    <div className="containerNav">
      <Link to="/about">
        <button className="controls">About</button>
      </Link>
      <Link to="/home">
        <button className="controls">Home</button>
      </Link>
      <SearchBar searchHandler={searchHandler} />
      <button className="controls" onClick={randomHandler}> Random </button>
    </div>
  );
};

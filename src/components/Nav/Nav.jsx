import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export const Nav = ({ searchHandler, randomHandler }) => {
  return (
    <div style={{ display: "flex", justifyContent: "end" }}>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/home">
      <button>Home</button>
      </Link>
      <SearchBar searchHandler={searchHandler} />
      <button onClick={randomHandler}>Random</button>
    </div>
  );
};

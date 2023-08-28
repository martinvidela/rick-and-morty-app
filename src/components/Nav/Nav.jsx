import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";

export const Nav = ({ searchHandler, randomHandler, logout }) => {

  const location = useLocation()
  const login = location.pathname === '/'
  if(login){
    return null
  }
  return (
    <div className="containerNav">
     <button className="logout" onClick={logout}>Log out</button>
      <div>
      <Link to="/home" className="controls">Home</Link>
      </div>
     
      <SearchBar searchHandler={searchHandler} />
      <button className="controls" onClick={randomHandler}> Random </button>
    </div>
  );
};

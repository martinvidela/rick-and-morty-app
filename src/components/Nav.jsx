import React from "react";
import SearchBar from "./SearchBar";

export const Nav = (props) => {

    const {searchHandler} = props

  return (
    <div style={{display:"flex", justifyContent:'end'}}>
     <SearchBar searchHandler={searchHandler}/>
    </div>
  );
};

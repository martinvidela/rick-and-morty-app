import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCars } from "../../redux/actions/action";

export const Favorites = () => {
  const [aux, setAux] = useState(false);
  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const handleOrder = (e) => {
    dispatch(orderCars(e.target.value));
    setAux(!aux);
  };
  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };
  return (
    <div>
      <div className="selectoresContainer">
      <select className="selector" onChange={handleOrder}>
        <option value="A">Highest</option>
        <option value="B">Lowest</option>
      </select>
      <select className="selector" onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      </div>
      <div className="cards-container">
        {favorites.map((character) => {
          return <Card character={character} id={character.id} key={character.id} />;
        })}
      </div>
    </div>
  );
};

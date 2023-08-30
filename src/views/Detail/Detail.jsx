import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Detail.css'
import React from "react";

export const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(
      `https://rym2-production.up.railway.app/api/character/${id}?key=henrym-martinvidela`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
  }, [id]);
  console.log(character);
  return (
    <div className="detailCard">
      <img className="imagenDetail" src={character.image} alt="" />
      <h2>{character.name}</h2>
      <h2>{character.status}</h2>
      <h2>{character.species}</h2>
      <h2>{character.origin?.name}</h2>

    </div>
  );
};

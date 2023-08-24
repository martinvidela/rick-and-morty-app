import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import React from "react";

export const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);
console.log(character)
  return (
    <div>
      <h2>{character.name}</h2>
      <h2>{character.status}</h2>
      <h2>{character.species}</h2>
      <h2>{character.origin?.name}</h2>

      <img src={character.image} alt="" />
    </div>
  );
};
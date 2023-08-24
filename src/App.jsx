import React, { useState } from "react";
import { Nav } from "./components/Nav/Nav";
import axios from "axios";
import "./App.css";
import Cards from "./components/Cards/Cards";
import { Route, Routes } from "react-router-dom";
import { About } from "./views/about";
import { Detail } from "./components/Detail/Detail";
export const App = () => {
  const [characters, setCharacters] = useState([]);

  const searchHandler = (id) => {
    axios(
      `https://rym2-production.up.railway.app/api/character/${id}?key=henrym-martinvidela`
    ).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  };

  const closeHandler = (id) => {
    const filtrados = characters.filter((character) => character.id !== id);
    setCharacters(filtrados);
  };

  const randomHandler = () => {
    let memoria = [];
    let randomId = (Math.random() * 826).toFixed();
    if (!memoria.includes(randomId)) {
      memoria.push(randomId);
      searchHandler(randomId);
    } else {
      window.alert("Id repetido");
    }
  };
  return (
    <div className="App">
      <Nav searchHandler={searchHandler} randomHandler={randomHandler} />
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={closeHandler} />}
        />
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
    </div>
  );
};

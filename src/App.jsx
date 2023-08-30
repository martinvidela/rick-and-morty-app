import React, {  useState } from "react";
import { Nav } from "./components/Nav/Nav";
import axios from "axios";
import "./App.css";
import Cards from "./components/Cards/Cards";
import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "./views/ErrorPage";
import { Detail } from "./views/Detail/Detail";
import { Favorites } from "./components/Favorites/Favorites";
import { Start } from "./views/Start/Start";

export const App = () => {
  
  const [characters, setCharacters] = useState([]);

  const searchHandler = (id) => {
    const idNumber = parseInt(id);

    if(idNumber > 827){
      return window.alert("ID does not exist!")
    }
    const idExists = characters.find((character) => character.id === idNumber);
    if (!idExists) {
      axios(
        `https://rym2-production.up.railway.app/api/character/${id}?key=henrym-martinvidela`
      ).then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("There are no characters with this ID!");
        }
      });
    } else {
      window.alert("Sorry, you can't repeat a ID");
    }
  };

  const handleClear = () => {
    setCharacters([])

  };

  const randomHandler = () => {
    let memoria = [];
    let randomId = (Math.random() * 826).toFixed();
    if (!memoria.includes(randomId)) {
      memoria.push(randomId);
      searchHandler(randomId);
    } else {
      window.alert("Sorry, you can't repeat a ID");
    }
  };

  return (
    <div className="App">
      <Nav
        searchHandler={searchHandler}
        randomHandler={randomHandler}
        handleClear={handleClear}
      />
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} />}
        />
        <Route
          path="/favorites"
          element={<Favorites characters={characters} />}
        />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Start />} />
      </Routes>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { Nav } from "./components/Nav/Nav";
import axios from "axios";
import "./App.css";
import Cards from "./components/Cards/Cards";
import { Navigate, Route, Routes } from "react-router-dom";
import { ErrorPage } from "./views/ErrorPage";
import { Detail } from "./views/Detail/Detail";
import { Favorites } from "./components/Favorites/Favorites";

export const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/", {
        params: {
          page: 1,
        },
      })
      .then(({ data }) => {
        const firstThreeCharacters = data.results.slice(0, 3);
        setCharacters(firstThreeCharacters);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const searchHandler = (id) => {
    const idNumber = parseInt(id);


    if (idNumber > 827) {
      return window.alert("ID does not exist!");
    }
    const idExists = characters.find((character) => character.id === idNumber);
    if (!idExists) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(
        ({ data }) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("There are no characters with this ID!");
          }
        }
      );
    } else {
      window.alert("Sorry, you can't repeat a ID");
    }
  };

  const handleClear = () => {
    setCharacters([]);
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
        <Route path="/home" element={<Cards characters={characters} />} />
        <Route
          path="/favorites"
          element={<Favorites characters={characters} />}
        />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Navigate to='home'/>} />
      </Routes>
    </div>
  );
};

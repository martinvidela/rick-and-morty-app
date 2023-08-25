import React, { useEffect, useState } from "react";
import { Nav } from "./components/Nav/Nav";
import axios from "axios";
import "./App.css";
import Cards from "./components/Cards/Cards";
import { Route, Routes } from "react-router-dom";
import { About } from "./views/about";
import { ErrorPage } from "./views/ErrorPage";
import { Detail } from "./views/detail";
import { Formulario } from "./components/Formulario/Formulario";
import { useNavigate } from "react-router-dom";

export const App = () => {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "marto@gmail.com";
  const PASSWORD = "martolandia1";

  const login = (userData)=> {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const logout =()=>{
    setAccess(false)
    navigate("/");

  }

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
      <Nav searchHandler={searchHandler} randomHandler={randomHandler} logout={logout} />
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={closeHandler} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Formulario login={login} />} />
      </Routes>
    </div>
  );
};

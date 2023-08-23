import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import { Nav } from "./components/Nav";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  const searchHandler = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  function closeHandler(id) {
    const filtrados = characters.filter((character) => character.id !== id);
    setCharacters(filtrados)
  }

  return (
    <div className="App">
      <Nav searchHandler={searchHandler} />
      <Cards characters={characters} onClose={closeHandler} />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import { Nav } from "./components/Nav";

function App() {
  const [characters, setCharacters] = useState([]);

  const example = {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  };

  const searchHandler = () => {
    setCharacters([...characters, example]);
  };

  function closeHandler() {
    window.alert("Emulamos que se cierra la card");
  }

  return (
    <div className="App">
      <Nav searchHandler={searchHandler} />
      <Cards characters={characters} onClose={closeHandler} />
    </div>
  );
}

export default App;

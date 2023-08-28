import { Link } from "react-router-dom";

export default function Card({ character, onClose, id }) {
  return (
    <div>
      <div className="card">
        <button onClick={() => {onClose(id)}} className="buttonX" > X</button>
        <Link to={`/detail/${character.id}`}>
          <img className="imagenPj" src={character.image} alt="" />
        </Link>
        <div className="halfcard">
          <h2>{character.name}</h2>
          <h2>{character.species}</h2>
        </div>
      </div>
    </div>
  );
}

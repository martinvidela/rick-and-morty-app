import { Link } from "react-router-dom";


export default function Card({character, onClose, id}) {

  
  return (
    <div className="card">
      <button onClick={()=>{onClose(id)}} className="buttonX">X</button>
      <Link to={`/detail/${character.id}`}>
      <h2>{character.name}</h2>
      </Link>
      <h2>{character.status}</h2>
      <h2>{character.species}</h2>
      <h2>{character.origin.name}</h2>
      <img src={character.image} alt="" />
    </div>
  );
}

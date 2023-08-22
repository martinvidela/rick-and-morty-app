export default function Card(props) {
  const {character, onClose} = props
  return (
    <div className="card">
      <button onClick={onClose} className="buttonX">X</button>
      <h2>{character.name}</h2>
      <h2>{character.status}</h2>
      <h2>{character.species}</h2>
      <h2>{character.origin.name}</h2>
      <img src={character.image} alt="" />
    </div>
  );
}

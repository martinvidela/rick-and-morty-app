import Card from "./Card";

export default function Cards({ characters, onClose }) {
  return (
    <div className="cards-container">
      {characters.map((character) => (
        <Card character={character} key={character.id} onClose={() => onClose(character.id)}
        />
      ))}
    </div>
  );
}

import Card from "../Card/Card";

export default function Cards({ characters}) {
  return (
    <div className="cards-container">
      {
      characters.map((character) => (
        <Card character={character} id={character.id} 
        />
      ))
      }
    </div>
  );
}

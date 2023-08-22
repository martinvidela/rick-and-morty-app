import Card from "./Card";

export default function Cards(props) {
  const { characters } = props;
  const { onClose } = props;
  return (
    <div style={{display:"flex", justifyContent:"center", gap:'15px', marginTop:'10px'}}>
      {
      characters.map((character) => (
        <Card character={character} key={character.id} onClose={onClose}/>
      ))}
    </div>
  );
}

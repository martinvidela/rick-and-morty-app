export default function SearchBar({searchHandler}) {
  return (
      <div>
         <input type='search' placeholder="insert id.."/>
         <button onClick={searchHandler}>Agregar</button>
      </div>
   );
}

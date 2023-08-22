export default function SearchBar(props) {
   const {onSearch} = props
   console.log(onSearch)
   return (
      <div>
         <input type='search' />
         <button onClick={onSearch}>Agregar</button>
      </div>
   );
}

import { useState } from "react";

export default function SearchBar({ searchHandler }) {
  const [id, setId] = useState("");

  const handleChange = (e) => {
      setId(e.target.value)
  };
  return (
    <div>
      <input type="search" placeholder="Insert id.." onChange={handleChange} value={id} />
      <button onClick={()=>searchHandler(id)}>Add</button>
    </div>
  );
}

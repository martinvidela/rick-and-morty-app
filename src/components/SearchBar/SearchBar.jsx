import { useState } from "react";

export default function SearchBar({ searchHandler }) {
  const [id, setId] = useState("");

  const handleChange = (e) => {
      setId(e.target.value)
  };
  return (
    <div>
      <input className="controlsInput" type="search" placeholder="Insert ID!  ＼ʕ •ᴥ•ʔ／" onChange={handleChange} value={id} />
      <button className="controls" onClick={()=>searchHandler(id)}>Add</button>
    </div>
  );
}

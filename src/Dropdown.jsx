import { useState } from "react";

export default function Checkbox() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    
    setIsShown((current) => !current);

 
  };
  const [name, setName] = useState();
  return (
    <div>
      <button onClick={handleClick}>Dropdown</button>
      {isShown && (
        <div>
          <select  onChange={(e) => setName(e.target.value)}>
            <option value="Priyanshu">Priyanshu</option>
            <option value="Ashu">Ashu</option>
            <option value="Narendra">Narendra</option>
          </select>
          <h2>My Name is {name}</h2>
        </div>
      )}

      {isShown && <Box />}
    </div>
  );
}

function Box() {
  return <></>;
}
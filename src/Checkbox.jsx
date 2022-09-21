import { useState } from "react";

export default function Checkbox() {
  const [isShownnn, setIsShownnn] = useState(false);

  const handleClick = (event) => {
    
    setIsShownnn((current) => !current);

 
  };
  const [name, setName] = useState();
  const [namee, setNamee] = useState();
  const [nameee, setNameee] = useState();
  return (
    <div>
      <button onClick={handleClick}>Checkbox</button>
      {isShownnn && (
        <div>
        

       
  <input type="checkbox" name="fruit" value="Apple," id="" onChange={(e) => setName(e.target.value)}/> Apple
<input type="checkbox" name="fruit" value="Orange," id="" onChange={(f) => setNamee(f.target.value)}/> Orange 
<input type="checkbox" name="fruit" value="Banana" id="" onChange={(g) => setNameee(g.target.value)}/> Banana 
          <h2>I have  {name} {namee}{nameee}</h2>
         
        </div>
      )}

      {isShownnn && <Box />}
    </div>
  );
}

function Box() {
  return <></>;
}
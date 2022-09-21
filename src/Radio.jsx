import { useState } from "react";

export default function Checkbox() {
  const [isShownn, setIsShownn] = useState(false);

  const handleClick = (event) => {
    
    setIsShownn((current) => !current);

 
  };
  const [name, setName] = useState();
  return (
    <div>
      <button onClick={handleClick}>Radio</button>
      {isShownn && (
        <div>
        

          <input type="radio" value="male" onChange={(e) => setName(e.target.value)}/>Male
          <input type="radio" value= "female" onChange={(e) => setName(e.target.value)}/>Female
          
          <h2>I am {name}</h2>
        </div>
      )}

      {isShownn && <Box />}
    </div>
  );
}

function Box() {
  return <></>;
}
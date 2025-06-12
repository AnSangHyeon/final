import { useState } from "react";

let Final = () => {
  const [color, setColor] = useState("purple");
  return(
    <div>
      <div 
        style={{
          background: color
        }}
      >
        <span>Background Color : {color}</span>
        <input type="text" value={color} onInput={() => setColor(document.querySelector("input[type=text]").value)}/>
      </div>
    </div>
  );
}
export default Final;
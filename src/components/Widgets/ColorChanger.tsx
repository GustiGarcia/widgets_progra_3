import React, { useState } from "react";


export const ColorChange : React.FC=() => {
    const [color, setColor] = useState("black");

const handleColor = ()=>{
    setColor("blue")}

return(
    <div>
        <h1 style={{color:color}}>Holis, que color Ves??</h1>
        <button onClick={handleColor}> Cambiar color</button>

    </div>
)

}
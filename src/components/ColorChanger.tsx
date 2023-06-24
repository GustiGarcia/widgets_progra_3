import { useState } from "react";

export const ColorChanger : React.FC = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [color, setColor] = useState("orange");

    const handleCheckBox = () => {
        setIsChecked(!isChecked);
        setColor (isChecked? 'green':'blue');
    };

    // const changeColor = () => {
    //     setColor("green");
    // };

    const sentenceStyle = {color:color};

    return (
        <div>
            <h1 style={sentenceStyle}>TEXTO DE COLOR</h1>
            <label>
                <input type="checkbox" checked={isChecked} onChange={handleCheckBox}/>
                Cambiar color del texto
            </label>
            {/* <h1 style={{color: color}}>TEXTO CON COLOR</h1>
            <button onClick={changeColor}>Cambiar Color</button> */}
        </div>
    );
};
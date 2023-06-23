import React, { useState } from "react";

export const ColorChangerCheck = () => {
    const [isChecked, setisChecked] = useState(false);
    const [color, setColor]= useState("black");

    const handleCheckBox= () => {
        setisChecked(!isChecked);
        setColor(isChecked ? 'white': 'red')
    };

    const sentencesStyle = {
        color: color
    }

    return(
        <div>
            <h1 style={sentencesStyle}> TEXTO DE COLOR</h1>
            <label>
                <input type="checkbox" checked={isChecked} onChange={handleCheckBox} />
            </label>
        </div>
    )


}
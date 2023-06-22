import React, { useState } from "react";

interface SliderProps {
  Min: number;
  Max: number;
  Label: string;
}

export const InputSlider: React.FC<SliderProps> = ({ Min, Max, Label }) => {
  let [slider, setSlider] = useState<number>(0);

  const handleCheckBox = () => {
    setSlider((slider = 0));
  };

  return (
    <div>
      <br />
      <label>{Label}</label>
      <br />
      <input type="range" min={Min} max={Max} value={slider} onChange={(e)=>setSlider (Number(e.target.value))}/>
      <button onClick={handleCheckBox}>Reset</button>
    </div>
  );
};

import React, { useState } from "react";
/* 
interface RadioButtonProps {
  label: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label }) => {
  let [isChecked, setChecked] = useState();

  
  const HandleRadioButton = () => {
    setChecked (isChecked);
  };
  return (
    <label>
      <br />
      <br />
      <h3>{label}</h3>
      <input type="radio" name="Opcion 1" value="" id="3" checked={isChecked} onChange={HandleRadioButton}/>
      <input type="radio" name="Opcion 1" value="" id="2" checked={isChecked} onChange={HandleRadioButton}/>
      <input type="radio" name="Opcion 1" value="" id="1" checked={isChecked} onChange={HandleRadioButton}/>
    </label>
  );
}; */

const RadioButton: React.FC = ()=> {
  let [radioButton, setRadioButton] = useState<boolean>(false);

  const marca = () =>{
    setRadioButton(!radioButton);
    console.log('Marcado/Desmarcado')
  };


  return(
    <label>
      <input type="radio" 
      defaultChecked={radioButton}
      onClick={marca} />
    </label>
  )



}

export default RadioButton;

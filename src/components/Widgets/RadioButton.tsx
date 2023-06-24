import React, { useState } from "react";

interface RadioButtonProps {
  label: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({label}) => {
  let [radioButton, setRadioButton] = useState<boolean>(false);

  const marca = () =>{
    setRadioButton(!radioButton);
    console.log('Marcado/Desmarcado')
  };


  return(
    <label className="m-2">
      <input className="mr-2" type="radio" 
      checked={radioButton}
      onClick={marca} />
      {label}
    </label>
  )



}

export default RadioButton;

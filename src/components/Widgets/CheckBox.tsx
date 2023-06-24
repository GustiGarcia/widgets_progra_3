import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

interface CheckBoxProps {
  label: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({label}) => {
  const [isChecked, setisChecked] = useState(false);

  const handleCheckBox = () => {
    setisChecked(!isChecked);
  };

  return (
    <div className="container">
    <label>
      <input className="m-2" type="checkbox"
       checked={isChecked} 
       onChange={handleCheckBox} />
     {label}
    </label>
    </div>
  );
};

export default CheckBox;

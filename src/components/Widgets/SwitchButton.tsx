import React, { useState } from "react";

export const SwitchButton: React.FC = () => {
  const [isChecked, setisChecked] = useState(false);

  const handleCheckBox = () => {
    setisChecked(!isChecked)};

    return (
      <div className="mb-3">
        Encender Wi-Fi  
        <label className="switch">
          <input type="checkbox" 
          checked={isChecked}
          onChange={handleCheckBox}
          className="switch-input"
          />
          <span className="switch-slider round"></span>
        </label>
      </div>
    );
  };


import React, { useState } from 'react';
import { SwitchButton } from './Widgets/Switchbutton';
export const SwitchButtonApply: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <SwitchButton on={isOn} onToggle={handleToggle} />
    </div>
  );
};


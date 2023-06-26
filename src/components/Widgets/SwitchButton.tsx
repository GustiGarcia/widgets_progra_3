import React, { useState } from 'react';

type SwitchButtonProps = {
  on: boolean;
  onToggle: () => void;
};

export const SwitchButton: React.FC<SwitchButtonProps> = ({ on, onToggle }) => {
  const handleClick = () => {
    onToggle();
  };

  return (
    <button onClick={handleClick}>
      {on ? 'ON' : 'OFF'}
    </button>
  );
};
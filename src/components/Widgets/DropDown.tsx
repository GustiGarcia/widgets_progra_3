import React, { useState } from 'react';

export const DropDown = () => {
  const [opcion, setSeleccion] = useState('');

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSeleccion(event.target.value);
  };

  return (
    <div>
      <select value={opcion} onChange={handleChange}>
        <option value="">Seleccione una opcion</option>
        <option value="opcion1">Opción 1</option>
        <option value="opcion2">Opción 2</option>
        <option value="opcion3">Opción 3</option>
      </select>
    </div>
  );
};


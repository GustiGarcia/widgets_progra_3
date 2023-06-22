import React, { useState } from "react";

const Contador: React.FC = () => {
  const [contador, setContador] = useState(0);

  const incrementar = (cantidad: number) => {
    setContador(contador + cantidad);
  };

  return (
    <div>
      <p>Valor actual: {contador}</p>
      <button onClick={() => incrementar(1)}>+1</button>
      <button onClick={() => incrementar(2)}>+2</button>
    </div>
  );
};

export default Contador;

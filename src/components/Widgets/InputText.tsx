import React, { useState } from "react";

interface InputProps {
  label: string;
}

export const InputText: React.FC<InputProps> = ({ label }) => {
  const [text, setText] = useState<string>("");
  const [displayText, setDisplayText] = useState<string>("");


 const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value); 

  const handleClear = () => {
    setText("");
    setDisplayText("");
  };
  const handleSend= ()=>{
    console.log(text)
  };

  
  const handleShowText = () => {
    setDisplayText(text);
  };


  return (
    <>
      <br />
      {label}
      <br />
      <input type="text" value={text} onChange={handleInput}/>
      <br />
      <button onClick={handleClear}> Limpiar </button>
      <button onClick={handleSend}> Enviar </button>
      <button onClick={handleShowText}>Mostrar</button>
      <br />
      <span>{displayText}</span>
    </>
  );
};

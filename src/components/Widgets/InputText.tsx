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
      <div>
        {label}
        
        <input className="form-control" type="text" value={text} onChange={handleInput}/>
        
        <button className="btn btn-danger m-1" onClick={handleClear}> Limpiar </button>
        <button className="btn btn-primary m-1" onClick={handleSend}> Enviar </button>
        <button className="btn btn-secondary m-1"onClick={handleShowText}>Mostrar</button>
        
        <span>{displayText}</span>
      </div>
    </>
  );
};

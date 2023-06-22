import React, { useState } from "react";

interface InputProps {
  Cols: number;
  Rows: number;
  PlaceHolder: string
}

export const InputTextArea: React.FC<InputProps> = ({ Cols, Rows, PlaceHolder }) => {
  const [text, setText] = useState<string>("");

 const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setText(e.target.value); 

  const handleClear = () => {
    setText("");
  };
  const handleSend= ()=>{
    console.log(text)
  };


  return (
    <>
      <br />
      <br />
      <textarea placeholder={PlaceHolder} value={text} cols={Cols} rows={Rows} onChange={handleInput}/>
      <br />
      <button onClick={handleClear}> Limpiar </button>
      <button onClick={handleSend}> Enviar </button>
    </>
  );
};

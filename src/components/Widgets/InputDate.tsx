import React, { useState, useEffect } from "react";
/* //cambiar , esta bien pero mal encarado
interface InputProps {
  label: string;
}

 const InputDate: React.FC<InputProps> = () => {
  const [isDate, setIsDate] = useState();

  const handleInputDate = () => {
    setIsDate(isDate);
  };

  return (
    <label>
      <input type="date"
       checked={isDate} 
       onChange={handleInputDate} />
    </label>
  );
}; */


export const InputDate: React.FC=()=> {
  const [date, setDate] = useState<string | undefined> (undefined);

  useEffect(()=>{
    if (date !== undefined) 
    {console.log('se eligio la fecha ',{date});}
  }, [date]);


  return (
    <>
    <h3> seleccionar Fecha</h3>
    <br />
    <input type="date" value={date} onChange={(e)=> setDate(e.target.value)} />
    </>
  );
};


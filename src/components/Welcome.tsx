import React from "react";

const user = {
  name: "Gustavo",
  lastName: "Garcia",
  age: 32,
};

const Welcome: React.FC=()=> {
  return (
    <h1>
      Hola {user.name}, tu apellido es {user.lastName} y tu edad es {user.age}
    </h1>
    
  );
}

export default Welcome;

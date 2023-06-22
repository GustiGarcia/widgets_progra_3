import React, { useReducer } from "react";

// definicion de tipos

interface State {
  count: number;
}

type Action = { type: "SUMAR" } | { type: "RESTAR" };
//definicion Reeducer
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SUMAR":
      return { count: state.count + 1 };
    case "RESTAR":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const EjeReducer: React.FC = () => {
  //estado inicial
  const initialState: State = { count: 0 };
  // usamos Reducer
  const [state, dispach] = useReducer(reducer, initialState);
  return (
    <div>
      <p>
        Contar: {state.count}
        <br />
        <button onClick={() => dispach({ type: "SUMAR" })}>+ 1 </button>
        <button onClick={() => dispach({ type: "RESTAR" })}>- 1 </button>
      </p>
    </div>
  );
};

export default EjeReducer;

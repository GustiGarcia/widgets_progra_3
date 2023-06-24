import React from 'react';
import CheckBox from "./components/Widgets/CheckBox";
import RadioButton from "./components/Widgets/RadioButton";
import { InputDate } from "./components/Widgets/InputDate";
import { InputText } from "./components/Widgets/InputText";
import { InputTextArea } from "./components/Widgets/InputTextArea";
import { InputSlider } from "./components/Widgets/InputSlider";
import { SwitchButton } from "./components/Widgets/SwitchButton";
import TodoList from './components/ToDoList';
import 'bootstrap/dist/css/bootstrap.css';

const App: React.FC = () => {
  return (
    <div className='container bg-light'>
      <h1 style={{textAlign:"center"}}>Bienvenido al TP1 - Programación III - IES 9-023</h1>
      <h5 style={{textAlign:"center"}}>Avila, Juan Pablo / García, Gustavo / Maldonado, Franco</h5>
      <TodoList/>
      <hr />
      <CheckBox label="red"/>   
      <CheckBox label="blue"/>
      <CheckBox label="yellow"/>
      <hr />
      <InputDate/>
      <hr />
      <InputSlider Max={10} Min={0} Label="Slider"/>
      <hr />
      <InputText label="Ingrese su Nombre"/>
      <hr />
      <InputTextArea PlaceHolder="Escriba algo" Cols={50} Rows={10} />
      <hr />
      <RadioButton label='Opción 1'/> 
      <RadioButton label='Opción 2'/> 
      <RadioButton label='Opción 3'/> 
      <hr />
      <SwitchButton/>
    </div>
  );
};

export default App;

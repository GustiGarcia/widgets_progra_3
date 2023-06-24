import React from 'react';
import Welcome from "./components/Welcome";
import EjeReducer from "./components/Widgets/EjeReducer";
import { EjeEffect } from "./components/Widgets/EjeUseEffect";
import CheckBox from "./components/Widgets/CheckBox";
import RadioButton from "./components/Widgets/RadioButton";
import { InputDate } from "./components/Widgets/InputDate";
import { InputText } from "./components/Widgets/InputText";
import { InputTextArea } from "./components/Widgets/InputTextArea";
import { InputSlider } from "./components/Widgets/InputSlider";
import { ColorChanger } from './components/ColorChanger';


const App: React.FC = () => {
  return (
    <div>
      <h1>Bienvenido</h1>
      <Welcome />        
     {/*  <EjeReducer />     
      <EjeEffect />   
      <br />*/}   
      <br /> <br />
      {/* <InputDate  label={"holis"}/> */}
      <RadioButton/> 
      <RadioButton/> 
      <RadioButton/> 
      <CheckBox label="red"/>   
      <CheckBox label="blue"/>
      <CheckBox label="yellow"/>
      <InputDate/>
      <InputText label="ingrese su nombre"/>
      <InputTextArea PlaceHolder="Escriba algo" Cols={100} Rows={14} />
      <InputSlider Max={10} Min={0} Label="Holis"/>
      <ColorChanger />
      <br />
    </div>
  );
};

export default App;

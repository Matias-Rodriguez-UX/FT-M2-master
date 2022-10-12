import React, { useEffect, useRef, useState } from 'react';
import './Timer.css'

const Timer = () => {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  const [tipo, setTipo] = useState("Contador");

  function toggle(){
    setActivo(!activo)
    
  }
  function reset(){
    setSegundos(0);
    setActivo(false);
    myRef.current.value = 0 
  }

  function changeType(){
    if(tipo === "Contador") setTipo("Cuenta Regresiva")
    if(tipo === "Cuenta Regresiva") setTipo("Contador")
    setSegundos(0)
  }

useEffect(() => {
  let intervalo =null;
  if(activo && tipo === "Contador"){
    intervalo = setInterval(()=>{
      setSegundos(segundos => segundos +1);
    }, 1000);
  }
  if(!activo && segundos !==0 && tipo === "Contador"){
    clearInterval(intervalo)
  }
  if(activo && tipo === "Cuenta Regresiva"){
    intervalo = setInterval(()=>{
      segundos > 0 && setSegundos(segundos => segundos -1);
    }, 1000);
  }
  if(segundos === 0 && tipo==="Cuenta Regresiva"){
    reset();
    clearInterval(intervalo)
  }
  return () => clearInterval(intervalo);
}, [activo, segundos, tipo]);

const myRef = useRef(null)
function addSecs(){
  let ref = myRef.current.value
  setSegundos(ref)
}

  return (
    <div className="app">
      <div className='time'>
        {segundos} s
      </div>
      <div className='row'>
        <button className={`button-primary button-primary${activo?'active':'inactive'}`} onClick={toggle}>
          {activo ? "Pausa" : "Inicio"}
        </button>
        <button className='button-secondary' onClick={reset}>
          Reset
        </button>
      </div>
      <button className='button' onClick={changeType}>
        {tipo}
      </button>
      {tipo === 'Cuenta Regresiva' && <input type={'number'} placeholder="Ingresa Segundos" autoComplete='off' ref={myRef}onChange={addSecs}/>}
    </div>
  );
};

export default Timer;

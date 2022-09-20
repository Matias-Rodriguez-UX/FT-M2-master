import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div>
      <input type="text" placeholder={'Ciudad...'} on/>
      <button onClick={()=>props.onSearch('Buscando...')}>Agregar</button>
    </div>
  )
};
import React from 'react';
import s from './SearchBar.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={s.searchBar}>
      <input type="text" placeholder={'Ciudad...'} on/>
      <button onClick={()=>props.onSearch('Buscando...')}>Agregar</button>
    </div>
  )
};
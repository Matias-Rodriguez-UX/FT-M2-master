import React from 'react';
import s from './Card.module.css'

export default function Card(props) {
  // acá va tu código

  return( 
    <div className={s.cardPr}>
      <div className={s.title}>
      <h4 className={s.ciudad}>{props.name}</h4>
      <button className={s.btnClose} onClick={props.onClose}>x</button>
      </div>
      <div className={s.img}>
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="img" />
      </div>
      <div className={s.cuerpo}>
      <div className={s.temp}>
        <h5>Min</h5>
        <h5>{props.min}°F</h5>
      </div>
      <div className={s.temp}>
        <h5>Max</h5>
        <h5>{props.max}°F</h5>
      </div>
      </div>
    </div>
  ) 
};
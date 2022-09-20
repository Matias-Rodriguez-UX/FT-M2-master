import React from 'react';

export default function Card(props) {
  // acá va tu código

  return( 
    <div>
      <button onClick={props.onClose}>x</button>
      <h4>{props.name}</h4>
      <div>
        <h5>Min</h5>
        <h5>{props.min}</h5>
      </div>
      <div>
        <h5>Max</h5>
        <h5>{props.max}</h5>
      </div>
      <div>
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="img" />
      </div>
    </div>
  ) 
};
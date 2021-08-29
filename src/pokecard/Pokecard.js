import React from 'react';
import './Pokecard.css';
import 'bootstrap/dist/css/bootstrap.css'

const Pokecard = (props) => {
  return (
      <div className="card">
        <div className="card-title text-center">{ props.name }</div>
        <img className="Pokecard-image" src={ props.img } />
        <div className="Pokecard-data text-center">Type: { props.type }</div>
        <div className="Pokecard-data text-center">EXP: { props.exp }</div>
      </div>
  );
}

export default Pokecard;
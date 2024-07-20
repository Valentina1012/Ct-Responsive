import React from 'react';

function MenuButton(props) {

  return (
    <div className="col contenedor-opcion" onClick = {props.click}>
      <img className='imagen-opcion' src={props.icono} alt={props.alt} />
      <p className="texto-opcion">{props.text}</p>
    </div>
  );
}

export default MenuButton;

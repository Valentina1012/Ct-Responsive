import React from 'react';

function MenuHeader(props) {
  return (
    <div className={`menu-header ${props.clase}`}>
      <div className='menu-title'>
        <h3>{props.title}</h3>
      </div>
      <div className='menu-icono'>
        <img src={props.icono} alt={props.alt} />
      </div>
    </div>
  );
}

export default MenuHeader;
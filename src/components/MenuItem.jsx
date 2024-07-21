import React from 'react';
import '../styles/menuItem.css'

function MenuItem(props) {
  return (
    <div className='contenedor-item'>
      <div className='contenedor-img-cantidad'>
        <div className='contenedor-img'>
          <img className='imagen-item' src={props.img} alt={props.alt} />
        </div>

        <div className='contenedor-cantidad-precio'>
          <p>${props.price}</p>
          <form>
            <input type='number' min={1} placeholder='Cantidad' />
            <button type='button' id={props.id} onClick={props.click}>Añadir</button>
          </form>
        </div>
      </div>

      <div className='contenedor-info'>
        <h5>{props.title}</h5>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default MenuItem
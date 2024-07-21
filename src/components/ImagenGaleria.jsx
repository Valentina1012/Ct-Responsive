import React from 'react'
import '../styles/imagenGaleria.css'

export default function ImagenGaleria({ cafe, setIsActive, setIdImg }) {
  return (
    <li className='container-imagen-galeria'>
        <div
          className='container-titulo-imagen'
          onClick={() => {
            setIdImg(cafe.id)
            setIsActive(true);
          }}
        >
          <p className='titulo-imagen'>{cafe.title}</p>
        </div>
        <img src={cafe.image} alt={`Imagen de ${cafe.title}`} />
    </li>
  )
}

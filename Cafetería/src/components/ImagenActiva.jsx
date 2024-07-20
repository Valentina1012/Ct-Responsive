import React from 'react'
import '../styles/imagenActiva.css'

function ImagenActiva({ imagen, idImg, setIdImg, isActive, setIsActive, nombreCafe }) {
  return (
    <div className={`container-imagen-activa ${isActive ? '' : 'oculto'}`}>
      <div className='container-imagen'>
        <img src={imagen} alt={`Imagen de ${nombreCafe}`} />
        <div className='container-contador'>
          <p className='contador'>{`${idImg}/16`}</p>
          <p className='nombre'>{nombreCafe}</p>
        </div>
      </div>
      <div className='container-botones'>
        <button
          type='button'
          className='boton-galeria izquierda'
          onClick={() => {setIdImg(prev => prev - 1 < 1 ? 16 : prev - 1)}}
        >
          <i className="bi bi-chevron-left"></i>
        </button>
        <button
          type='button'
          className='boton-galeria derecha'
          onClick={() => {setIdImg(prev => prev + 1 > 16 ? 1 : prev + 1)}}
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
      <button
        type='button'
        className='boton-cerrar'
        onClick={() => {setIsActive(false)}}
      >
        <i className="bi bi-x-lg"></i>
      </button>
    </div>
  )
}

export default ImagenActiva
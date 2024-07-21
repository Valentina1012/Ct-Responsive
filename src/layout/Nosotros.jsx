import React, { useState } from 'react';
import '../styles/nosotros.css';
import { Link } from 'react-scroll';

function Nosotros() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '../../imagenes/nosotros_1.jpg',
    '../../imagenes/nosotros_2.jpg',
    '../../imagenes/nosotros_3.jpg',
    '../../imagenes/nosotros_4.jpg',
    '../../imagenes/nosotros_5.jpg'

  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section id="nosotros" className='contenedor-nosotros mb-4'>    
      <div className='contenedor-img-nosotros d-flex justify-content-center'>
        <img src={images[currentImageIndex]} alt={`Imagen ${currentImageIndex + 1}`} />
        <div className='contenedor-botones-nosotros'>
          <button className='boton-nosotros izq' onClick={prevImage}>
            <i className="bi bi-chevron-left"></i>
          </button>
          <button className='boton-nosotros der' onClick={nextImage}>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className='contenedor-descripcion-nosotros d-flex flex-column justify-content-center align-items-center'>
        <h2 className='fuente-principal mb-3'>¿Quiénes somos?</h2>
        <p className='descripcion-nosotros mb-4'>
            Espresso Armonía nació de un sueño: crear un lugar acogedor donde
            cada taza de café cuente una historia y cada visitante se sienta como
            en casa. Fundada en 2019 por Jane y John Doe, esta cafetería ha crecido
            desde sus humildes comienzos hasta convertirse en un punto de encuentro 
            para amantes del café, familias y amigos.
        </p>
        <iframe height="315" src="https://www.youtube.com/embed/TT9wIWPlOYs?si=1jjK0KLkHsaAQ1uC" title="YouTube video player"></iframe>
      </div>

        <Link className='boton-ir-arriba' to='homepage' smooth={true} duration={1000}><i class="bi bi-arrow-up"></i></Link>

    </section>
  )
}

export default Nosotros
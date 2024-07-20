import React from 'react'
import '../styles/mapa.css';

export default function Mapa() {
  return (
    <div className="contacto contenedor-contacto-mapa my-4">
      <div className="contenedor-contacto">
          <h2 className='fuente-principal mb-3'>Contacto</h2>
          <p className='mb-2'><strong>Dirección:</strong> Av.Córdoba 975 CABA, 1054</p>
          <p className='mb-2'><strong>Horario de apertura:</strong> 09:00 AM a 09:00 PM</p>
          <p><strong>Teléfono:</strong> +54 9 11 9x86-978x</p>
      </div>

      <div className="contenedor-mapa">
        <div id="map-container" className='contenedor-iframe'>
          <iframe
            frameBorder="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.5241401835373!2d-58.388381384770194!3d-34.59873518045906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb2f7c3e4b1b%3A0x4e4b4e0d15d84390!2sAv.%20C%C3%B3rdoba%20975%2C%20C1054AAV%20CABA%2C%20Argentina!5e0!3m2!1sen!2s!4v1624007869823!5m2!1sen!2s"
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </div>
  )
}

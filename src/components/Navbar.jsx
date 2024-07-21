import React from 'react';
import { Link } from 'react-scroll';
import logo from '../img/coffee_logo.png'
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav id='homepage' className='container-navbar px-5 py-2'>
      <a href='#' className='enlace-logo'>
        <img className='imagen-logo' src={logo} alt='Logo Espresso Armonía' />
        <h3 className='fuente-principal'>Espresso Armonía</h3>
      </a>

      <div className='container-nav-links'>
        <Link className='link-navbar' to='nosotros' smooth={true} duration={500}>Nosotros</Link>
        <Link className='link-navbar' to='menu' smooth={true}  duration={500}>Menú</Link>
        <Link className='link-navbar' to='contacto' smooth={true} duration={500}>Contacto</Link>
      </div>
    </nav>
  );
}

export default Navbar
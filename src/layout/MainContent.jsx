import React from 'react';
import Menu from './Menu';
import Mapa from '../components/Mapa'
import Tutoriales from '../components/Tutoriales'



function MainContent() {
  return (
    <>
      <Menu/>
      <Tutoriales/>
      <Mapa/>
    </>
  );
}

export default MainContent;
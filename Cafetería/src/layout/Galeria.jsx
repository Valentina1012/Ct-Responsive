import React, { useEffect, useState } from 'react';
import '../styles/galeria.css';
import ImagenGaleria from '../components/ImagenGaleria';
import ImagenActiva from '../components/ImagenActiva';

const imgs_url = 'https://api.sampleapis.com/coffee/hot';

export default function Galeria() {
  const [cafes, setCafes] = useState([]);
  const [idImg, setIdImg] = useState(1);
  const [isActive, setIsActive] = useState(false);

  const fetchData = async () => {
    const res = await fetch(imgs_url);
    const data = await res.json();
    setCafes(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className='container-galeria mb-4'>
      <h2 className='fuente-principal titulo-galeria'>Galería</h2>

      <ul className='container-imagenes-galeria'>
        {
          cafes.map(cafe => {
            if (cafe.id < 17) {
              return <ImagenGaleria 
              key={cafe.id}
              cafe={cafe}
              setIsActive={setIsActive}
              setIdImg={setIdImg}
            />
            }
          })
        }
      </ul>

      <ImagenActiva nombreCafe={cafes.find(cafe => cafe.id === idImg)?.title} imagen={cafes.find(cafe => cafe.id === idImg)?.image} idImg={idImg} setIdImg={setIdImg} isActive={isActive} setIsActive={setIsActive} />
    </section>
  )
}
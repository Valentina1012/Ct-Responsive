import React, {useState, useEffect} from 'react';
import iconoCafe from '/public/imagenes/icono-cafe.png';
import iconoCafeFrio from '/public/imagenes/icono-cafeFrio.png';
import iconoJugo from '/public/imagenes/icono-jugo.png';
import MenuButton from '../components/MenuButton'
import bebidas from '../data/bebidas'
import MenuItem from '../components/MenuItem'
import MenuHeader from '../components/MenuHeader'
import "../styles/menu.css"


function Menu() {
  const [carrito, setCarrito] = useState([])
  const [totalCarrito, setTotalCarrito] = useState(0)
  const [menu, setMenu] = useState(bebidas.filter((bebida) => bebida.type == "cafe"))
  const [menuHeader, setMenuHeader] = useState({title:'Cafés calientes', clase:"cafe", icono: iconoCafe, alt:"imagen de cafe caliente"})

  const onClickHandle = (menuType,menuHeader) => {
    setMenu(bebidas.filter((bebida) => bebida.type == menuType))
    setMenuHeader(menuHeader)
  }

  const itemClickHandle = (e) => {
    e.preventDefault()
    const id = e.target.id
    let cantidad = e.target.form.querySelector('input').value
    let bebida = Object.create(bebidas.filter((bebida) => bebida.id == id)[0]);
    bebida.cantidad = Number(cantidad)

    if(bebida.cantidad == "" || bebida.cantidad < 1){
      bebida.cantidad = 1;
    }

    if(carrito.find(b => b.id == bebida.id)){
      let bebidaCarrito = carrito.find(b => b.id == bebida.id)
      bebidaCarrito.cantidad += bebida.cantidad
      setCarrito([...carrito])
    } else {
      setCarrito([...carrito, bebida])
    }
  }

  const totalHandle = () => {
    const precios = carrito.map(bebida => (bebida.cantidad*bebida.price))
    setTotalCarrito(precios.reduce((acc,cur) => acc  + cur,0))
  }

  const resetCartHandle = () => {
    setCarrito([])
    setTotalCarrito(0)
  }

  return (
    <section id='menu' className='contenedor-menues mb-4'>
      <h2 className="fuente-principal mb-4 menu-titulo">Menú</h2>
      <div className="contenedor-menues-precios cont text-center">
        <div className="contenedor-opciones">
          <MenuButton icono={iconoCafe} alt="imagen de cafe caliente" text="Cafés calientes" click={()=>onClickHandle("cafe",{title:'Cafés calientes', clase:"cafe", icono: iconoCafe, alt:"imagen de cafe caliente"})}/>
          <MenuButton icono={iconoCafeFrio} alt="imagen de cafe frio" text="Cafés fríos" click={()=>onClickHandle("cafeFrio",{title:'Cafés fríos', clase:"cafeFrio", icono: iconoCafeFrio, alt:"imagen de cafe frío"})}/>
          <MenuButton icono={iconoJugo} alt="imagen de jugo frutal" text="Jugos frutales" click={()=>onClickHandle("jugoFrutal",{title:'Jugos frutales', clase:"jugo", icono: iconoJugo, alt:"imagen de jugo frutal"})}/>
        </div>
          
        <MenuHeader {...menuHeader}/>

        <div className='menu'>
          <div className='menu-content'>
            <div className='items'>
              {
                menu.map(bebida => {
                  return <MenuItem key={bebida.title+bebida.id} id={bebida.id} img={bebida.image} alt={`Imagen de ${bebida.title}`} price={bebida.price} title={bebida.title} description={bebida.description} click={(e) => {itemClickHandle(e)}}/>
                })
              }
            </div>
          </div>

          <aside className='cart'>
            <div className='cart-detail'>
              <h3 className='cart-title'>Carrito de compras</h3>
              <ul className='cart-list'>
                {
                  carrito.map(bebida => {
                    return <li key={bebida.id}>
                      <span className='cantidad'>x{bebida.cantidad} </span>
                      <span className='bebida-title'>{bebida.title} </span>
                      <span className='bebida-price'><b>${bebida.price*bebida.cantidad}</b> (${bebida.price})</span>
                    </li>
                  })
                }
              </ul>
            </div>

            <div className='cart-total'>
              <span className='total-price'>Total: ${totalCarrito}</span>
              <button className='total-cart' onClick={()=>{totalHandle()}}>Calcular total</button>
              <button className='reset-cart' onClick={()=>{resetCartHandle()}}>Vaciar</button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Menu;

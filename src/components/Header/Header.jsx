import './Header.css'
import { Navigation } from '../../hooks/useNavigation'
import Marca from '../../img/Header/marca.svg'
import Polygon from '../../img/Header/polygon.svg'
import { useEffect } from 'react'
import { activarXScroll } from '../../hooks/useScroll'

export function Header() {

  useEffect(() => {
    const $sombraInicio = document.getElementById("sombraInicio");
    const $inicio = document.getElementById("inicio");
    const $navItems = document.querySelectorAll(".nav-item");

    window.addEventListener('scroll', () => {
      activarXScroll($navItems);
    });


    $sombraInicio.style.height = $inicio.clientHeight + "px";
  },[])

  return (
    <>
      <header className='header-container fixed-top'>
        <div className='header-head d-flex justify-content-center align-items-center cursor-pointer' onClick={() => Navigation('#inicio')}>
          <img src={Marca} alt="marca" className='icon-img'/>
        </div>
        <div className='header-content'>
          <div className='poylgon-container d-flex justify-content-center align-items-center'>
            <img src={Polygon} alt="polygon" className='polygon-img cursor-pointer'/>
          </div>
          <ul className='nav-container'>
            <li className='ibrand nav-item'><p className='fs-2'>SECTORES</p></li>
            <li className='ibrand nav-item'><p className='fs-2' onClick={() => Navigation('#proyectos')}>PROYECTOS</p></li>
            <li className='ibrand nav-item'><p className='fs-2' onClick={() => Navigation('#nosotros')}>NOSOTROS</p></li>
          </ul>
        </div>
      </header>
      <nav className='fixed-bottom redes-container'>
        <a href="#" className='redes-item'>
          <i className="fab fa-facebook-f fs-4"></i>
        </a>
        <a href="#" className='redes-item'>
          <i className="fab fa-instagram fs-4"></i>
        </a>
        <a href="#" className='redes-item'>
          <i className='fa-brands fa-tiktok fs-4'></i>
        </a>
        <a href="#" className='redes-item'>
          <i className=' fa-brands fa-youtube fs-4'></i>
        </a>
      </nav>
    </>
  )
}


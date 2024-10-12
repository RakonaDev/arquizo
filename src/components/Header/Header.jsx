import './Header.css'
import { Navigation } from '../../hooks/useNavigation'
import Marca from '../../img/Header/marca.svg'
import Polygon from '../../img/Header/polygon.svg'

export function Header() {
  return (
    <>
      <header className='header-container fixed-top'>
        <div className='header-head d-flex justify-content-center align-items-center cursor-pointer' onClick={() => Navigation('.header-container')}>
          <img src={Marca} alt="marca" className='icon-img'/>
        </div>
        <div className='header-content'>
          <div className='poylgon-container d-flex justify-content-center align-items-center'>
            <img src={Polygon} alt="polygon" className='polygon-img cursor-pointer'/>
          </div>
          <ul className='nav-container'>
            <li className='ibrand nav-item'><p className='fs-2'>SECTORES</p></li>
            <li className='ibrand nav-item'><p className='fs-2'>PROYECTOS</p></li>
            <li className='ibrand nav-item'><p className='fs-2'>NOSOTROS</p></li>
          </ul>
        </div>
      </header>
    </>
  )
}


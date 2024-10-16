import './Servicios.css'


import Tramite1 from '../../img/Servicios/tramite1.png'
import Tramite2 from '../../img/Servicios/tramite2.png'
import Tramite3 from '../../img/Servicios/tramite3.png'

import Arquitectura1 from '../../img/Servicios/arquitectura1.png'
import Arquitectura2 from '../../img/Servicios/arquitectura2.png'
import Arquitectura3 from '../../img/Servicios/arquitectura3.png'

export function Servicios() {
  return (
    <>
      <div className="servicios-container w-100" id='servicios'>
        <div className='d-flex'>  
          <aside className='sombraHeader'></aside>
          <main className='servicios-main'>
            <aside className='servicios-aside extending-aside-animation'>
              <h1 className='texto-azul fw-bold ibrand'>SERVICIOS</h1>
            </aside>
            <article className='servicios-article extending-animation'>
              <div className='servicios-header'>
                <h1 className='text-light ibrand'>TRAMITES Y SANEAMIENTO</h1>
              </div>
              <div className='servicios-body'>
                <ul className='servicios-list'>
                  <li className='tramites-item'>
                    <img src={Tramite1} alt="" className='servicios-imagen'/>
                  </li>
                  <li className='tramites-item'>
                    <img src={Tramite2} alt="" className='servicios-imagen'/>
                  </li>
                  <li className='tramites-item'>
                    <img src={Tramite3} alt="" className='servicios-imagen'/>
                  </li>
                </ul>
              </div>
              <div className='servicios-header mt-5'>
                <h1 className='text-light ibrand'>ARQUITECTURA</h1>
              </div>
              <div className='servicios-body'>
                <ul className='servicios-list'>
                  <li className='servicios-item'>
                    <img src={Arquitectura1} alt="" className='arquitectura-imagen'/>
                  </li>
                  <li className='servicios-item'>
                    <img src={Arquitectura2} alt="" className='arquitectura-imagen'/>
                  </li>
                  <li className='servicios-item'>
                    <img src={Arquitectura3} alt="" className='arquitectura-imagen'/>
                  </li>
                </ul>
              </div>
            </article>
          </main>
        </div>
      </div>
    </>
  )
}

import './Contacto.css';

import Banner from '../../img/Contacto/banner.jpg';
import BannerCel from '../../img/Contacto/bannerCel.png';
import Persona from '../../img/Contacto/persona.png';
import { useEffect } from 'react';
import { useState } from 'react';

export function Contacto() {

  const[responsive, setResponsive] = useState(false);

  useEffect(() => {
    if(window.innerWidth <= 768){
      setResponsive(true)
    }
    window.addEventListener('resize', () => {
      if(window.innerWidth <= 768){
        setResponsive(true)
      }
      else{
        setResponsive(false)
      }
    })
  },[responsive])

  return (
    <>
      <div className='contacto-route w-100' id='contacto'>
        <div className='d-flex'>
          <aside className='sombraHeader'></aside>
          <main className='contacto-main w-100'>
            <img src={responsive ? BannerCel : Banner} alt="banner" className='w-100'/>
            <div className='contacto-main-content w-100 d-flex'>
              <section className='form-section'>
                <h1 className='titulo-form text-rojo ibrand'>CONTACTO</h1>
                <form action="#" className='mt-5 contacto-form'>
                  <div className="form-floating mb-3 short-input">
                    <input type="text" id='nombre' placeholder='' className='form-control' required autoComplete='off'/>
                    <label htmlFor='nombre'>Nombres</label>
                  </div>
                  <div className="form-floating mb-3 short-input">
                    <input type="text" id='apellido' placeholder='' className='form-control' required autoComplete='off'/>
                    <label htmlFor='apellido'>Apellidos</label>
                  </div>
                  <div className="form-floating mb-3 short-input">
                    <input type="text" id='telefono' placeholder='' className='form-control' required autoComplete='off'/>
                    <label htmlFor='telefono'>Teléfono</label>
                  </div>
                  <div className="form-floating mb-3 short-input">
                    <input type="email" id='email' placeholder='' className='form-control' required autoComplete='off'/>
                    <label htmlFor='email'>E-mail</label>
                  </div>
                  <div className="form-floating mb-3 w-100">
                    <input type="text" id='empresa' placeholder='' className='form-control' required autoComplete='off'/>
                    <label htmlFor='empresa'>Nombre de la Empresa</label>
                  </div>
                  <div className="form-floating mb-3 w-100">
                    <textarea type="text" id='empresa' placeholder='' className='form-control' required autoComplete='off'></textarea>
                    <label htmlFor='empresa'>Mensaje</label>
                  </div>
                  <div className='w-100 d-flex justify-content-end'>
                    <input type="submit" value="Enviar" className='btn-enviar-contacto corbel fs-5'/>
                  </div>
                </form>
              </section>
              <aside className='person-aside'>
                <img src={Persona} alt="persona" className='persona'/>
              </aside>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}


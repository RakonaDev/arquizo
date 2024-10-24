import './Contacto.css';

import Banner from '../../img/Contacto/banner.jpg';
import BannerCel from '../../img/Contacto/bannerCel.png';
import Persona from '../../img/Contacto/persona.png';
import { useEffect, useRef } from 'react';
import { useState } from 'react';

import emailjs from "@emailjs/browser";

export function Contacto() {

  const[responsive, setResponsive] = useState(false);

  const formContacto = useRef();

  const enviarCorreo = (event) => {
    event.preventDefault();
    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, formContacto.current, {
      publicKey: import.meta.env.VITE_PUBLIC_KEY
    })
    .then(
      (response) => {
        alert("Se ha enviado correctamente su contacto. Muchas gracias por contar con nosotros! 😎👍");
        
        console.log(response.status)
      },
      (error) => {
        console.log(error)
      }
    )
  }

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
                <form action="#" className='mt-5 contacto-form' ref={formContacto} onSubmit={(event) => enviarCorreo(event)}>
                  <div className="form-floating mb-3 short-input">
                    <input type="text" id='nombre' name='nombres' placeholder='' className='form-control' required autoComplete='off'/>
                    <label htmlFor='nombre'>Nombres</label>
                  </div>
                  <div className="form-floating mb-3 short-input">
                    <input type="text" id='apellido' name='apellidos' placeholder='' className='form-control' required autoComplete='off'/>
                    <label htmlFor='apellido'>Apellidos</label>
                  </div>
                  <div className="form-floating mb-3 short-input">
                    <input type="text" id='telefono' name='telefono' placeholder='' className='form-control' required autoComplete='off'/>
                    <label htmlFor='telefono'>Teléfono</label>
                  </div>
                  <div className="form-floating mb-3 short-input">
                    <input type="email" id='email' name='correo' placeholder='' className='form-control' required autoComplete='off'/>
                    <label htmlFor='email'>E-mail</label>
                  </div>
                  <div className="form-floating mb-3 w-100">
                    <input type="text" id='empresa' name='nombre_empresa' placeholder='' className='form-control' required autoComplete='off'/>
                    <label htmlFor='empresa'>Nombre de la Empresa</label>
                  </div>
                  <div className="form-floating mb-3 w-100">
                    <textarea type="text" id='empresa' name='message' placeholder='' className='form-control' required autoComplete='off'></textarea>
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


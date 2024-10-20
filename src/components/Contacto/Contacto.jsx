import './Contacto.css';

import Banner from '../../img/Contacto/banner.jpg';
import Persona from '../../img/Contacto/persona.png';

export function Contacto() {
  return (
    <>
      <div className='contacto-route w-100' id='contacto'>
        <div className='d-flex'>
          <aside className='sombraHeader'></aside>
          <main className='contacto-main w-100'>
            <img src={Banner} alt="banner" className='w-100'/>
            <div className='contacto-main-content w-100 d-flex'>
              <section className='form-section'>
                <h1>Contacto</h1>
                <form action="#">

                </form>
              </section>
              <aside className='person-aside'>
                <img src={Persona} alt="persona" className='w-100'/>
              </aside>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}


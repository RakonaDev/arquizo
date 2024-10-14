import { useEffect } from 'react'
import './Proyectos.css'

export function ProyectosHeader() {

  useEffect(() => {
    const $tituloProyecto = document.querySelector(".titulo-proyecto");
    if(window.innerWidth < 768){
      $tituloProyecto.classList.add("fs-1");
    }

    window.addEventListener('resize', () => {
      if(window.innerWidth < 768){
        $tituloProyecto.classList.add("fs-1");
      }
      else{
        $tituloProyecto.classList.remove("fs-1");
      }
    });
  },[])

  return (
    <>
      <div className='d-flex' id='proyectos'>
        <div className='sombraHeader'></div>
        <article className='proyectos-container d-flex'>
          <div className='titulo-proyecto-container'>
            <h1 className='fw-bold ibrand titulo-proyecto'>PROYECTOS</h1>
          </div>
          <div className='description-proyecto-container'>
            <p className='fs-5 text-justify'>Descubre nuestros proyectos más recientes en saneamiento físico legal, diseño arquitectónico y diseño de interiores, donde aplicamos nuestra experiencia y compromiso con la excelencia.</p>
          </div>
        </article>
      </div>
    </>
  )
}

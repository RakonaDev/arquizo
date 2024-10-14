import { useState } from 'react'
import { mostrarProyectos } from '../../hooks/useProyectos'
import './ProyectosMostrar.css'

export function ProyectosMostrar() {
  const [mostrar, setMostrar] = useState("tramites")

  return (
    <>
      <div className="d-flex" id="proyectos-mostrar">
        <div className="sombraHeader"></div>
        <article className="proyectosMostrar-container d-flex justify-content-end">
          <div className="proyectosMostrar-content">
            <div className='title-proyecto-container d-flex'>
              <h1 className='ibrand fs-3 texto-azul texto-delineado' onClick={() => mostrarProyectos(mostrar, setMostrar, "tramites")}>TRÁMITES</h1>
              <h1 className='ibrand fs-3 texto-azul texto-delineado' onClick={() => mostrarProyectos(mostrar, setMostrar, "arquitectura")}>ARQUITECTURA</h1>
              <h1 className='ibrand fs-3 texto-azul texto-delineado' onClick={() => mostrarProyectos(mostrar, setMostrar, "interiores")}>INTERIORES</h1>
            </div>
            <div className='proyectos-mostrar mt-5 w-100'>
              <div className='proyecto-lista w-100'>
                <div className='proyecto-lista-content background-rojo mostrar'>
                  <div className='proyecto-lista-item'></div>
                  <div className='proyecto-lista-item'></div>
                  <div className='proyecto-lista-item'></div>
                  <div className='proyecto-lista-item'></div>
                  <div className='proyecto-lista-item'></div>
                  <div className='proyecto-lista-item'></div>
                </div>
                <div className='proyecto-lista-content background-azul retirado'>
                  <div className='proyecto-lista-item'></div>
                  <div className='proyecto-lista-item'></div>
                  <div className='proyecto-lista-item'></div>
                  <div className='proyecto-lista-item'></div>
                  <div className='proyecto-lista-item'></div>
                  <div className='proyecto-lista-item'></div>
                </div>
                <div className='proyecto-lista-content background-azul retirado'>
                  <div className='proyecto-lista-item'></div>
                  <div className='proyecto-lista-item'></div>
                  <div className='proyecto-lista-item'></div>
                  <div className='proyecto-lista-item'></div>
                  <div className='proyecto-lista-item'></div>
                  <div className='proyecto-lista-item'></div>
                </div>
              </div>
            </div>
          </div>    
        </article>
      </div>
    </>
  )
}

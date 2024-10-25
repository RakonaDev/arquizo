import "./Inicio.css";
import Ingenieros from "../../img/Inicio/ingenieros.svg";
import Logo from "../../img/Inicio/logo.svg";
import { useEffect, useRef, useState } from "react";

export function Inicio() {

  const[mostrarTitulo, setMostrarTitulo] = useState(false);
  const[mostrarLogo, setMostrarLogo] = useState(false);
  const[mostrarIngenieros, setMostrarIngenieros] = useState(false);

  const refTitulo = useRef(null);
  const refLogo = useRef(null);
  const refIngenieros = useRef(null);

  const controladorTitulo = (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        setMostrarTitulo(true)
      }
      else{
        setMostrarTitulo(false)
      }
    });
  }

  const controladorLogo = (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        setMostrarLogo(true)
      }
      else{
        setMostrarLogo(false)
      }
    });
  }

  const controladorIngenieros = (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        setMostrarIngenieros(true)
      }
      else{
        setMostrarIngenieros(false)
      }
    });
  }

  useEffect(() => {

    const observerTitulo = new IntersectionObserver(controladorTitulo, {
      threshold: 0.1
    });

    const observerLogo = new IntersectionObserver(controladorLogo, {
      threshold: 0.1
    });

    const observerIngenieros = new IntersectionObserver(controladorIngenieros, {
      threshold: 0.1
    });
    
    if(refTitulo.current){
      observerTitulo.observe(refTitulo.current);
    }

    if(refLogo.current){
      observerLogo.observe(refLogo.current);
    }

    if(refIngenieros.current){
      observerIngenieros.observe(refIngenieros.current);
    }

    const $tituloBody = document.getElementById("titulo-body");

    if(window.innerWidth < 768){
      $tituloBody.classList.add("fs-1");
    }

    if (window.innerWidth < 1670) {
      document.getElementById("ingenieros").style.display = "none";
    }

    window.addEventListener("resize", function () {
      
      if (window.innerWidth < 1170) {
        document.getElementById("ingenieros").style.display = "none";
      } else {
        document.getElementById("ingenieros").style.display = "block";
      }

      if(window.innerWidth < 768){
        $tituloBody.classList.add("fs-1");
      }
      else{
        $tituloBody.classList.remove("fs-1");
      }
    })
    return () => {
      /*observerTitulo.unobserve(refTitulo.current);*/
    }
  },[]);

  return (
    <div className="d-flex" id="inicio">
      <div className="sombraHeader" id="sombraInicio"></div>
      <div className="build-fixed fixed-top"></div>
      <div className="body-container">
        <section className="titulo-body-section">
          <section className="" >
            <h1 className={mostrarTitulo ? "text-rojo titulo-body pe-1 mostrarArriba" : "text-rojo titulo-body pe-1"} id="titulo-body" ref={refTitulo}>DISEÑO VISIÓN FUTURO</h1>
          </section>
        </section>
        <section className="cuerpo-body-section">
          <section className="container">
            <img className={mostrarIngenieros ? "ingenieros-img mostrarEscala" : "ingenieros-img"} src={Ingenieros} alt="Ingenieros" id="ingenieros" ref={refIngenieros}/>
            <p className="fs-5 text-white description corbel-bold">
              En ARQUIZO, impulsamos el crecimiento profesional, la innovación y
              los logros de nuestros colaboradores para contribuir al progreso
              de la arquitectura peruana.
            </p>
            <img src={Logo} alt="Logo" className={ mostrarLogo ? "logoBody-img mostrarAbajo" : "logoBody-img"} ref={refLogo} />
          </section>
        </section>
      </div>
    </div>
  )
}
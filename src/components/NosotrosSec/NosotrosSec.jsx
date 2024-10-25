import "./NosotrosSec.css";

import BackNosotros from "../../img/NosotrosSec/back-nosotros.png";
import { useEffect, useRef, useState } from "react";

export function NosotrosSec() {

  const[mostrarProposito, setMostrarProposito] = useState(false);
  const[mostrarMision, setMostrarMision] = useState(false);
  const[mostrarVision, setMostrarVision] = useState(false);

  const refNosotros = useRef(null);
  const refMision = useRef(null);
  const refVision = useRef(null);

  const controladorNosotros = (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        setMostrarProposito(true)
      }
      else{
        setMostrarProposito(false)
      }
    });
  }

  const controladorMision = (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        setMostrarMision(true)
      }
      else{
        setMostrarMision(false)
      }
    });
  }

  const controladorVision = (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        setMostrarVision(true)
      }
      else{
        setMostrarVision(false)
      }
    });
  }

  useEffect(() => {
    const observerProposito = new IntersectionObserver(controladorNosotros, {
      threshold: 0.1
    })

    const observerMision = new IntersectionObserver(controladorMision, {
      threshold: 0.1
    })

    const observerVision = new IntersectionObserver(controladorVision, {
      threshold: 0.1
    })

    if(refNosotros.current){
      
      observerProposito.observe(refNosotros.current);
    }

    if(refMision.current){
      if(refNosotros.current.classList.contains("mostrarDerecha")){
        return
      }
      observerMision.observe(refMision.current);
    }

    if(refVision.current){
      observerVision.observe(refNosotros.current);
    }
    return () => {
      /*
      if(refNosotros.current){
        observerProposito.unobserve(refNosotros.current);
      }
      */
      /*
      if(refMision.current){
        observerMision.unobserve(refMision.current);
      }
      if(refVision.current){
        observerVision.unobserve(refNosotros.current);
      }
        */
    }

  },[])

  return (
    <>
      <div className="d-flex" id="nosotrosSpec">
        <div className="sombraHeader"></div>
        <div className="nosotrosSec-container">
          <div className={mostrarProposito ? "header-nosotros-sec mostrarDerecha" : "header-nosotros-sec"} ref={refNosotros}>
            <h1 className="fs-1 text-rojo ibrand pt-5">PROPÓSITO</h1>
            <p className="fw-medium fs-5 text-justify pt-3 pb-4 corbel-bold">
              Transformar espacios a través de soluciones arquitectónicas que
              integren legalidad, funcionalidad y diseño, contribuyendo al
              desarrollo sostenible y al bienestar de las personas, mientras
              facilitamos el crecimiento de las comunidades y empresas mediante
              nuestros servicios especializados.
            </p>
          </div>
          <div className="w-100 d-flex pt-5 flex-wrap">
            <div className={mostrarMision ? "mision-container mostrarDerecha" : "mision-container"} ref={refMision}>
              <h1 className="fs-1 text-rojo ibrand">MISIÓN</h1>
              <p className="fs-5 fw-medium texto-azul text-justify corbel-bold">
                Ofrecer soluciones arquitectónicas integrales, combinando
                innovación, sostenibilidad y excelencia técnica en saneamiento
                físico legal, trámites y diseño, para crear espacios funcionales
                y estéticamente atractivos.
              </p>
            </div>
            <div className={mostrarVision ? "vision-container mostrarIzquierda" : "vision-container"} ref={refVision}>
              <h1 className="fs-1 text-rojo fw-medium ibrand">VISIÓN</h1>
              <p className="fs-5 fw-medium text-justify text-light corbel-bold">
                Ser líderes en el sector arquitectónico peruano, reconocidos por
                transformar espacios con un enfoque legal, funcional y de
                diseño, promoviendo sostenibilidad y mejorando la calidad de
                vida en las comunidades.
              </p>
            </div>
          </div>
          <div className="footer-img-container">
            <img alt="" className="back-nosotros-img" src={BackNosotros} />
          </div>
        </div>
      </div>
    </>
  );
}

import "./Inicio.css";
import Ingenieros from "../../img/Inicio/ingenieros.svg";
import Logo from "../../img/Inicio/logo.svg";
import { useEffect } from "react";

export function Inicio() {

  useEffect(() => {
    const $tituloBody = document.getElementById("titulo-body");

    if(window.innerWidth < 768){
      $tituloBody.classList.add("fs-1");
    }

    if (window.innerWidth < 1170) {
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
    });
  })

  return (
    <div className="d-flex" id="inicio">
      <div className="sombraHeader"></div>
      <div className="body-container">
        <section className="titulo-body-section">
          <section className="container">
            <h1 className="text-rojo titulo-body" id="titulo-body">DISEÑO VISIÓN FUTURO</h1>
          </section>
        </section>
        <section className="cuerpo-body-section">
          <section className="container">
            <img className="ingenieros-img" src={Ingenieros} alt="Ingenieros" id="ingenieros" />
            <p className="fs-5 text-white description inter">
              En ARQUIZO, impulsamos el crecimiento profesional, la innovación y
              los logros de nuestros colaboradores para contribuir al progreso
              de la arquitectura peruana.
            </p>
            <img src={Logo} alt="Logo" className="logoBody-img" />
          </section>
        </section>
      </div>
    </div>
  );
}

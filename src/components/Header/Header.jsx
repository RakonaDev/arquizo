import "./Header.css";
import { Navigation } from "../../hooks/useNavigation";
import Marca from "../../img/Header/marca.svg";
import Polygon from "../../img/Header/polygon.svg";
import { useEffect, useState } from "react";
import { activarXScroll } from "../../hooks/useScroll";
import { trasladarHeader } from "../../hooks/useHeader";

export function Header() {

  const[mover, setMover] = useState("centro");
  const[primeraPagina] = useState("primeraPagina");
  const[segundaPagina] = useState("segundaPagina");
  let traslado = ""

  const clickNavegacion = (para, instancia = 0, nombrePagina = "") => {
    if(nombrePagina == primeraPagina){
      traslado = primeraPagina
    }
    else{
      traslado = segundaPagina
    }
    Navigation(para, instancia)
  }

  useEffect(() => {
    const $sombraInicio = document.getElementById("sombraInicio");
    const $inicio = document.getElementById("inicio");
    const $navItems = document.querySelectorAll(".nav-item");
    const $containerNav = document.querySelectorAll(".containerNav");

    activarXScroll($navItems);

    window.addEventListener("scroll", () => {

      activarXScroll($navItems);

      if($navItems[0].classList.contains("activo") || $navItems[1].classList.contains("activo") || $navItems[2].classList.contains("activo")){
        
        //console.log(trasladando);
        console.log(traslado)

        if(traslado == ""){
          trasladarHeader("anterior", $containerNav)
        }
        else if(traslado == "primeraPagina"){
          traslado = ""
        }
        else{
          return
        }

        //trasladarHeader("anterior", $containerNav)
      }
      else if($navItems[3].classList.contains("activo") || $navItems[4].classList.contains("activo") || $navItems[5].classList.contains("activo")){

        console.log(traslado)

        if(traslado == ""){
          trasladarHeader("siguiente", $containerNav)
        }
        else if(traslado == "segundaPagina"){
          traslado = ""
        }
        else{
          return
        }
        //trasladarHeader("siguiente", $containerNav)
      }

    });

    $sombraInicio.style.height = $inicio.clientHeight + "px";
  }, [traslado]);

  return (
    <>
      <header className="header-container fixed-top">
        <div
          className="header-head d-flex justify-content-center align-items-center cursor-pointer"
          onClick={() => clickNavegacion("#inicio", 0 , "")}
        >
          <img src={Marca} alt="marca" className="icon-img" />
        </div>
        <div className="header-content">
          <div className="containerNav centro-container">
            <div className="poylgon-container d-flex justify-content-center align-items-center">
              <img
                src={Polygon}
                alt="polygon"
                className="polygon-img cursor-pointer"
                onClick={() => trasladarHeader("siguiente", document.querySelectorAll(".containerNav"))}
              />
            </div>
            <ul className="nav-container">
              <li className="ibrand nav-item">
                <p className="fs-3" onClick={() => clickNavegacion("#sectores", 0 , "primeraPagina")}>
                  SECTORES
                </p>
              </li>
              <li className="ibrand nav-item">
                <p className="fs-3" onClick={() => clickNavegacion("#proyectos", 0 , "primeraPagina")}>
                  PROYECTOS
                </p>
              </li>
              <li className="ibrand nav-item">
                <p className="fs-3" onClick={() => clickNavegacion("#nosotros", 0 , "primeraPagina")}>
                  NOSOTROS
                </p>
              </li>
            </ul>
          </div>
          <div className="containerNav anterior">
            <ul className="nav-container">
              <li className="ibrand nav-item">
                <p className="fs-3" onClick={() => clickNavegacion("#servicios", 0 , "segundaPagina")}>
                  SERVICIOS
                </p>
              </li>
              <li className="ibrand nav-item">
                <p className="fs-3" onClick={() => clickNavegacion("#contacto", 0 , "segundaPagina")}>
                  CONTACTO
                </p>
              </li>
              <li className="ibrand nav-item">
                <p className="fs-3" style={{width: "210px"}} onClick={() => clickNavegacion("#contratar", 0 , "segundaPagina")}>
                  TRABAJA CON NOSOTROS
                </p>
              </li>
            </ul>
            <div className="poylgon-container d-flex justify-content-center align-items-center">
              <img
                src={Polygon}
                alt="polygon"
                className="polygon-img cursor-pointer"
                style={{transform: "rotate(180deg)"}}
                onClick={() => trasladarHeader("anterior", document.querySelectorAll(".containerNav"), mover, setMover)}
              />
            </div>
          </div>
        </div>
      </header>
      <nav className="fixed-bottom redes-container">
        <a href="#" className="redes-item">
          <i className="fab fa-facebook-f fs-4"></i>
        </a>
        <a href="#" className="redes-item">
          <i className="fab fa-instagram fs-4"></i>
        </a>
        <a href="#" className="redes-item">
          <i className="fa-brands fa-tiktok fs-4"></i>
        </a>
        <a href="#" className="redes-item">
          <i className=" fa-brands fa-youtube fs-4"></i>
        </a>
      </nav>
    </>
  );
}

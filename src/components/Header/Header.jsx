import "./Header.css";
import { Navigation } from "../../hooks/useNavigation";
import Marca from "../../img/Header/marca.svg";
import Polygon from "../../img/Header/polygon.svg";
import { useEffect, useState } from "react";
import { activarXScroll } from "../../hooks/useScroll";
import { trasladarHeader } from "../../hooks/useHeader";

export function Header() {

  const[mover, setMover] = useState("centro");
  const[trasladando, setTrasladando] = useState('');

  useEffect(() => {
    const $sombraInicio = document.getElementById("sombraInicio");
    const $inicio = document.getElementById("inicio");
    const $navItems = document.querySelectorAll(".nav-item");
    const $containerNav = document.querySelectorAll(".containerNav");

    activarXScroll($navItems);

    window.addEventListener("scroll", () => {

      activarXScroll($navItems);

      if($navItems[0].classList.contains("activo") || $navItems[1].classList.contains("activo") || $navItems[2].classList.contains("activo")){
        /*
        if(mover == "anterior"){
          return 
        }*/
        trasladarHeader("anterior", $containerNav)
      }
      else if($navItems[3].classList.contains("activo") || $navItems[4].classList.contains("activo") || $navItems[5].classList.contains("activo")){
        /*
        if(mover == "siguiente"){
          return 
        }
          */
        trasladarHeader("siguiente", $containerNav)
      }
      else{
        return
      }

    });

    $sombraInicio.style.height = $inicio.clientHeight + "px";
  }, [mover, trasladando]);

  return (
    <>
      <header className="header-container fixed-top">
        <div
          className="header-head d-flex justify-content-center align-items-center cursor-pointer"
          onClick={() => Navigation("#inicio", 0,setTrasladando, "")}
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
                <p className="fs-3" onClick={() => Navigation("#sectores",0, setTrasladando, "sectores")}>
                  SECTORES
                </p>
              </li>
              <li className="ibrand nav-item">
                <p className="fs-3" onClick={() => Navigation("#proyectos", 0,setTrasladando, "proyectos")}>
                  PROYECTOS
                </p>
              </li>
              <li className="ibrand nav-item">
                <p className="fs-3" onClick={() => Navigation("#nosotros", 0,setTrasladando, "nosotros")}>
                  NOSOTROS
                </p>
              </li>
            </ul>
          </div>
          <div className="containerNav anterior">
            <ul className="nav-container">
              <li className="ibrand nav-item">
                <p className="fs-3" onClick={() => Navigation("#servicios", 0,setTrasladando, "servicios")}>
                  SERVICIOS
                </p>
              </li>
              <li className="ibrand nav-item">
                <p className="fs-3" onClick={() => Navigation("#contacto", 0,setTrasladando, "contacto")}>
                  CONTACTO
                </p>
              </li>
              <li className="ibrand nav-item">
                <p className="fs-3" style={{width: "210px"}} onClick={() => Navigation("#contratar",0, setTrasladando, "contratar")}>
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

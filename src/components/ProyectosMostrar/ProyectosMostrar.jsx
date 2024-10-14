import { useEffect, useState } from "react";
import { mostrarProyectos } from "../../hooks/useProyectos";
import { seleccionarTitulo } from "../../hooks/useTitulo";
import "./ProyectosMostrar.css";

import Polygon from "../../img/Header/polygon.svg";

export function ProyectosMostrar() {
  const [mostrar, setMostrar] = useState("tramites");

  useEffect(() => {
    if (window.innerWidth <= 1068) {
      document
        .querySelector(".proyectosMostrar-content")
        .classList.add("w-100");
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 1068) {
        document
          .querySelector(".proyectosMostrar-content")
          .classList.add("w-100");
        if (
          document
            .querySelector(".proyectosMostrar-content")
            .classList.contains("w-100")
        ) {
          return;
        }
      } else {
        document
          .querySelector(".proyectosMostrar-content")
          .classList.remove("w-100");
      }
    });
  });

  return (
    <>
      <div className="d-flex w-100" id="proyectos-mostrar">
        <div className="sombraHeader"></div>
        <article className="proyectosMostrar-container d-flex justify-content-end">
          <div className="proyectosMostrar-content">
            <div className="title-proyecto-container d-flex">
              <div className="titulo-item mostrarTitulo">
                <h1
                  className="ibrand fs-3 texto-azul texto-delineado centroTitulo"
                  onClick={() =>
                    mostrarProyectos(
                      mostrar,
                      setMostrar,
                      "tramites",
                      document.querySelectorAll(".proyecto-lista-content")
                    )
                  }
                >
                  TRÁMITES{" "}
                  <img
                    src={Polygon}
                    alt="polygon"
                    onClick={() =>
                      seleccionarTitulo(
                        mostrar,
                        setMostrar,
                        "arquitectura",
                        document.querySelectorAll(".titulo-item")
                      )
                    }
                  />
                </h1>
              </div>
              <div className="titulo-item anteriorTitulo">
                <h1
                  className="ibrand fs-3 texto-azul texto-delineado"
                  onClick={() =>
                    mostrarProyectos(
                      mostrar,
                      setMostrar,
                      "arquitectura",
                      document.querySelectorAll(".proyecto-lista-content")
                    )
                  }
                >
                  <img
                    src={Polygon}
                    alt=""
                    className="izquierda-Polygon"
                    onClick={() =>
                      seleccionarTitulo(
                        mostrar,
                        setMostrar,
                        "tramites",
                        document.querySelectorAll(".titulo-item")
                      )
                    }
                  />{" "}
                  ARQUITECTURA{" "}
                  <img
                    src={Polygon}
                    alt="polygon"
                    onClick={() =>
                      seleccionarTitulo(
                        mostrar,
                        setMostrar,
                        "interiores",
                        document.querySelectorAll(".titulo-item")
                      )
                    }
                  />
                </h1>
              </div>
              <div className="titulo-item anteriorTitulo">
                <h1
                  className="ibrand fs-3 texto-azul texto-delineado"
                  onClick={() =>
                    mostrarProyectos(
                      mostrar,
                      setMostrar,
                      "interiores",
                      document.querySelectorAll(".proyecto-lista-content")
                    )
                  }
                >
                  <img
                    src={Polygon}
                    alt="polygon"
                    className="izquierda-Polygon"
                    onClick={() =>
                      seleccionarTitulo(
                        mostrar,
                        setMostrar,
                        "arquitectura",
                        document.querySelectorAll(".titulo-item")
                      )
                    }
                  />{" "}
                  INTERIORES
                </h1>
              </div>
            </div>
            <div className="proyectos-mostrar mt-5 w-100">
              <div className="proyecto-lista w-100">
                <div className="proyecto-lista-content background-rojo mostrar">
                  <div className="proyecto-lista-item"></div>
                  <div className="proyecto-lista-item"></div>
                  <div className="proyecto-lista-item"></div>
                  <div className="proyecto-lista-item"></div>
                  <div className="proyecto-lista-item"></div>
                  <div className="proyecto-lista-item"></div>
                </div>
                <div className="proyecto-lista-content background-azul retirado">
                  <div className="proyecto-lista-item"></div>
                  <div className="proyecto-lista-item"></div>
                  <div className="proyecto-lista-item"></div>
                  <div className="proyecto-lista-item"></div>
                  <div className="proyecto-lista-item"></div>
                  <div className="proyecto-lista-item"></div>
                </div>
                <div className="proyecto-lista-content background-rojo retirado">
                  <div className="proyecto-lista-item"></div>
                  <div className="proyecto-lista-item"></div>
                  <div className="proyecto-lista-item"></div>
                  <div className="proyecto-lista-item"></div>
                  <div className="proyecto-lista-item"></div>
                  <div className="proyecto-lista-item"></div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

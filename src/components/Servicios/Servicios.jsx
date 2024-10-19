import "./Servicios.css";

import Tramite1 from "../../img/Servicios/tramite1.jpg";
import Tramite2 from "../../img/Servicios/tramite2.jpg";
import Tramite3 from "../../img/Servicios/tramite3.jpg";

import Arquitectura1 from "../../img/Servicios/arquitecturaPrueba1.jpg";
import Arquitectura2 from "../../img/Servicios/arquitecturaPrueba2.jpg";
import Arquitectura3 from "../../img/Servicios/arquitecturaPrueba3.jpg";

export function Servicios() {
  return (
    <>
      <div className="servicios-container w-100" id="servicios">
        <div className="d-flex">
          <aside className="sombraHeader"></aside>
          <main className="servicios-main">
            <aside className="servicios-aside extending-aside-animation">
              <h1 className="texto-azul fw-bold ibrand">SERVICIOS</h1>
            </aside>
            <article className="servicios-article extending-animation">
              <div className="servicios-header">
                <h1 className="text-light ibrand">TRAMITES Y SANEAMIENTO</h1>
              </div>
              <div className="servicios-body">
                <ul className="servicios-list">
                  <li className="servicios-item">
                    <div className="item-content">
                      <p className="text-light ibrand fs-6">DECLARATORIA DE FÁBRICA</p>
                    </div>
                    <img src={Tramite1} alt="" className="servicios-imagen" />
                  </li>
                  <li className="servicios-item">
                    <div className="item-content">
                      <p className="text-light ibrand fs-6">INDEPENDIZACIÓN</p>
                    </div>
                    <img src={Tramite2} alt="" className="servicios-imagen" />
                  </li>
                  <li className="servicios-item">
                    <div className="item-content">
                      <p className="text-light ibrand fs-6">LICENCIA DE FUNCIONAMIENTO</p>
                    </div>
                    <img src={Tramite3} alt="" className="servicios-imagen" />
                  </li>
                </ul>
              </div>
              <div className="servicios-footer pt-4">
                <h1 className="fw-bold ibrand">SERVICIOS</h1>
              </div>

              <div className="servicios-header mt-5 servicios-responsive">
                <h1 className="text-light ibrand">TRAMITES Y SANEAMIENTO</h1>
              </div>
              <div className="servicios-body servicios-responsive">
                <ul className="servicios-list">
                  <li className="servicios-item">
                    <div className="item-content">
                      <p className="text-light ibrand fs-6">LICENCIA DE FUNCIONAMIENTO</p>
                    </div>
                    <img
                      src={Tramite3}
                      alt="arquitectura"
                      className="servicios-imagen"
                    />
                  </li>
                </ul>
              </div>
              <div className="servicios-footer pt-4">
                <h1 className="fw-bold ibrand">SERVICIOS</h1>
              </div>

              <div className="servicios-header mt-5">
                <h1 className="text-light ibrand">ARQUITECTURA</h1>
              </div>
              <div className="servicios-body">
                <ul className="servicios-list">
                  <li className="servicios-item">
                    <div className="item-content">
                      <p className="text-light ibrand fs-6">ANTE-PROYECTOS</p>
                    </div>
                    <img
                      src={Arquitectura1}
                      alt="arquitectura"
                      className="servicios-imagen"
                    />
                  </li>
                  <li className="servicios-item">
                    <div className="item-content">
                      <p className="text-light ibrand fs-6">DISEÑO DE INTERIORES</p>
                    </div>
                    <img
                      src={Arquitectura2}
                      alt="arquitectura"
                      className="servicios-imagen"
                    />
                  </li>
                  <li className="servicios-item">
                    <div className="item-content">
                      <p className="text-light ibrand fs-6">EJECUCIÓN DE OBRAS</p>
                    </div>
                    <img
                      src={Arquitectura3}
                      alt="arquitectura"
                      className="servicios-imagen"
                    />
                  </li>
                </ul>
              </div>
              <div className="servicios-footer pt-4">
                <h1 className="fw-bold ibrand">SERVICIOS</h1>
              </div>

              <div className="servicios-header mt-5 servicios-responsive">
                <h1 className="text-light ibrand">ARQUITECTURA</h1>
              </div>
              <div className="servicios-body servicios-responsive">
                <ul className="servicios-list">
                  <li className="servicios-item">
                    <div className="item-content">
                      <p className="text-light ibrand fs-6">EJECUCIÓN DE OBRAS</p>
                    </div>
                    <img
                      src={Arquitectura3}
                      alt="arquitectura"
                      className="servicios-imagen"
                    />
                  </li>
                </ul>
              </div>
              <div className="servicios-footer pt-4">
                <h1 className="fw-bold ibrand">SERVICIOS</h1>
              </div>
            </article>
          </main>
        </div>
      </div>
    </>
  );
}

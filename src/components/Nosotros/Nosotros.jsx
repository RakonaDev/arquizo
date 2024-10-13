import "./Nosotros.css";
import Helmet from "../../img/Nosotros/helmet.png";

import Arquitecto1 from "../../img/Nosotros/arquitecto1.jpg";
import Arquitecto2 from "../../img/Nosotros/arquitecto2.png";

export const Nosotros = () => {
  return (
    <div className="d-flex">
      <div className="sombraHeader"></div>
      <div className="nosotros-container border-container" id="nosotros">
        <div>
          <div className="helmet-img-container">
            <img src={Helmet} alt="" className="helmet-img" />
          </div>
          <section className="nosotros-body">
            <div className="container border-1 border-black ps-5 pe-5 pt-3">
              <h1 className="pt-4 text-rojo ibrand">NOSOTROS</h1>
              <p className="pt-4 fs-5 text-justify texto-azul fw-medium">
                ARQUIZO es un estudio arquitectónico peruano con amplia
                experiencia en gestión de proyectos y saneamiento físico legal.
                Ofrecemos soluciones integrales en trámites, diseño
                arquitectónico y diseño de interiores, enfocándonos en cumplir
                con los más altos estándares técnicos, legales y estéticos.
                Nuestro compromiso es convertir las ideas de nuestros clientes
                en espacios funcionales y personalizados.
              </p>
              <h1 className="pt-4 ibrand text-rojo">NUESTRO EQUIPO</h1>
              <div className="pt-2 w-100 d-flex justify-content-evenly flex-wrap row-gap-4">
                <div className="ingeniero-card">
                  <img src={Arquitecto1} alt="ingeniero1" />
                  <div className="w-100 ingeniero-body d-flex align-items-center">
                    <p className="fs-5 text-light pt-1 ps-3 pe-3 ibrand">
                      KIMBERLY LAGUNA PECHO
                    </p>
                  </div>
                  <p className="fs-5">ARQUITECTA ESPECIALISTA</p>
                </div>
                <div className="ingeniero-card">
                  <img src={Arquitecto2} alt="ingeniero2" />
                  <div className="w-100 ingeniero-body d-flex align-items-center">
                    <p className="fs-5 text-light pt-1 ps-3 pe-3 ibrand">
                      MAYCKOL MORI RIOS
                    </p>
                  </div>
                  <p className="fs-5">ARQUITECTO INTERIORISTA</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

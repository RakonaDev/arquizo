import "./Sectores.css";

import Sector1 from "../../img/Sectores/sector1.png";
import Sector2 from "../../img/Sectores/sector2.png";
import Sector3 from "../../img/Sectores/sector3.png";

export function Sectores() {
  return (
    <>
      <div className="d-flex" id="sectores">
        <div className="sombraHeader"></div>
        <article className="sectores-container d-flex">
          <aside className="sectores-aside extending-aside-animation">
            <h1 className="texto-azul fw-bold ibrand">SECTORES</h1>
          </aside>
          <main className="sectores-main extending-animation">
            {/* Sector 1 */}
            <div className="sector-item">
              <article className="sector-header">
                <img src={Sector1} alt="sector1" className="w-100" />
              </article>
              <section className="sector-body">
                <h1 className="fs-1 text-light">SANEAMIENTO FÍSICO LEGAR</h1>
                <p className="fs-6 text-light text-justify corbel">
                  Realizamos proyectos de saneamiento físico legal desde la
                  etapa preliminar hasta su implementación. En la fase inicial,
                  contamos con una amplia experiencia en la revisión de
                  documentación, identificación de irregularidades y gestión de
                  trámites necesarios. Desarrollamos estudios de legalidad,
                  análisis de riesgos, planificación de acciones correctivas y
                  optimización de la propiedad, asegurando que cada proyecto
                  cumpla con la normativa vigente y maximice su valor para
                  nuestros clientes.
                </p>
              </section>
            </div>

            {/* Sector 2 */}
            <div className="sector-item">
              <article className="sector-header">
                <img src={Sector2} alt="sector1" className="w-100" />
              </article>
              <section className="sector-body">
                <h1 className="fs-1 text-light">PROYECTOS ARQUITECTONICOS</h1>
                <p className="fs-6 text-light text-justify corbel">
                  Desarrollamos proyectos arquitectónicos desde la concepción
                  inicial hasta la ejecución final. Nuestro equipo se encarga de
                  crear diseños innovadores y funcionales, adaptados a las
                  necesidades específicas de cada cliente. Nos especializamos en
                  la elaboración de planos, estudios de viabilidad, diseño de
                  interiores y planificación del espacio, garantizando que cada
                  proyecto no solo cumpla con los estándares estéticos y
                  funcionales, sino que también se integre de manera armoniosa
                  con su entorno y respete la normativa vigente.
                </p>
              </section>
            </div>

            {/* Sector 3 */}
            <div className="sector-item">
              <article className="sector-header">
                <img src={Sector3} alt="sector1" className="w-100" />
              </article>
              <section className="sector-body">
                <h1 className="fs-1 text-light">DISEÑO DE INTERIORES</h1>
                <p className="fs-6 text-light text-justify corbel">
                  Ofrecemos servicios de diseño de interiores que transforman
                  espacios en entornos funcionales y estéticamente agradables.
                  Nuestro enfoque integral incluye la planificación del espacio,
                  selección de materiales y acabados, así como la creación de
                  una atmósfera única que refleja la personalidad y necesidades
                  de nuestros clientes. Trabajamos en estrecha colaboración para
                  garantizar que cada detalle, desde la iluminación hasta la
                  distribución del mobiliario, contribuya a un diseño cohesivo y
                  armonioso, maximizando tanto la comodidad como la belleza del
                  ambiente.
                </p>
              </section>
            </div>
          </main>
        </article>
      </div>
    </>
  );
}

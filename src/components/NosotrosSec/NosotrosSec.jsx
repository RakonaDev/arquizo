import "./NosotrosSec.css";

import BackNosotros from "../../img/NosotrosSec/back-nosotros.png";

export function NosotrosSec() {
  return (
    <>
      <div className="d-flex">
        <div className="sombraHeader" id="sombraInicio"></div>
        <div className="nosotrosSec-container">
          <h1 className="fs-1 text-rojo ibrand pt-5">PROPÓSITO</h1>
          <p className="fw-medium fs-5 text-justify pt-3">
            Transformar espacios a través de soluciones arquitectónicas que
            integren legalidad, funcionalidad y diseño, contribuyendo al
            desarrollo sostenible y al bienestar de las personas, mientras
            facilitamos el crecimiento de las comunidades y empresas mediante
            nuestros servicios especializados.
          </p>
        </div>
      </div>
    </>
  );
}

import "./NosotrosSec.css";

import BackNosotros from "../../img/NosotrosSec/back-nosotros.png";

export function NosotrosSec() {
  return (
    <>
      <div className="d-flex">
        <div className="sombraHeader"></div>
        <div className="nosotrosSec-container">
          <div className="header-nosotros-sec">
            <h1 className="fs-1 text-rojo ibrand pt-5">PROPÓSITO</h1>
            <p className="fw-medium fs-5 text-justify pt-3 pb-4">
              Transformar espacios a través de soluciones arquitectónicas que
              integren legalidad, funcionalidad y diseño, contribuyendo al
              desarrollo sostenible y al bienestar de las personas, mientras
              facilitamos el crecimiento de las comunidades y empresas mediante
              nuestros servicios especializados.
            </p>
          </div>
          <div className="w-100 d-flex pt-5 flex-wrap">
            <div className="mision-container">
              <h1 className="fs-1 text-rojo ibrand">MISIÓN</h1>
              <p className="fs-5 fw-medium texto-azul text-justify">
                Ofrecer soluciones arquitectónicas integrales, combinando
                innovación, sostenibilidad y excelencia técnica en saneamiento
                físico legal, trámites y diseño, para crear espacios funcionales
                y estéticamente atractivos.
              </p>
            </div>
            <div className="vision-container">
              <h1 className="fs-1 text-rojo fw-medium ibrand">VISIÓN</h1>
              <p className="fs-5 fw-medium text-justify text-light">
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

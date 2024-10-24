import "./Contratar.css";

import { useState } from "react";

import Ingenieros from "../../img/Contratar/ingenieros.png";

export function Contratar() {

  const[nombreArchivo, setNombreArchivo] = useState('Seleccionar Archivo');

  return (
    <>
      <div className="contratar-route w-100" id="contratar">
        <div className="d-flex">
          <aside className="sombraHeader"></aside>
          <main className="contratar-main d-flex">
            <section className="contratar-section">
              <div className="contratar-contect">
                <h1 className="ibrand text-rojo">ÚNETE A ARQUIZO</h1>
                <p className="corbel-bold">
                  En ARQUIZO, valoramos el talento, la pasión y el compromiso de
                  quienes forman parte de nuestro equipo. Si te apasiona la
                  arquitectura, el diseño de interiores, los proyectos
                  innovadores y el saneamiento físico-legal, y estás buscando un
                  entorno donde puedas crecer profesionalmente y aportar ideas
                  frescas, ¡nos encantaría conocerte! Si deseas formar parte de
                  un estudio en constante evolución, orientado a la excelencia y
                  a la innovación, completa el formulario de solicitud y únete a
                  nosotros en ARQUIZO.
                </p>
                <form action="https://www.arquizo.com/PHP/contratar.php" method="POST" className="contacto-form" encType="multipart/form-data">
                  <div className="form-floating mb-3 short-input">
                    <input type="text" id='nombre' name="nombres" placeholder='' className='form-control' required autoComplete='off'/>
                    <label htmlFor='nombre'>Nombres</label>
                  </div>
                  <div className="form-floating mb-3 short-input">
                    <input type="text" id='apellido' name="apellidos" placeholder='' className='form-control' required autoComplete='off'/>
                    <label htmlFor='apellido'>Apellidos</label>
                  </div>
                  <div className="form-floating mb-3 short-input">
                    <input type="email" id='email' name="email" placeholder='' className='form-control' required autoComplete='off'/>
                    <label htmlFor='email'>Email</label>
                  </div>
                  <div className="form-floating mb-3 short-input">
                    <input type="tel" id='celular' name="celular" placeholder='' className='form-control' required autoComplete='off'/>
                    <label htmlFor='celular'>Celular</label>
                  </div>
                  <div className="form-floating mb-3 w-100">
                    <input type="text" id='direccion' name="direccion" placeholder='' className='form-control' required autoComplete='off'/>
                    <label htmlFor='direccion'>Direccióm donde reside</label>
                  </div>
                  <div className="form-floating mb-3 w-100">
                    <input type="text" id='puesto' name="puesto" placeholder='' className='form-control' required autoComplete='off'/>
                    <label htmlFor='puesto'>Puesto de interés</label>
                  </div>
                  <div className="w-100 d-flex flex-column gap-3 mb-3">
                    <label htmlFor="archivo" className="text-dark fs-5 ps-3 corbel-bold cursor-pointer">Adjuntar tu CV</label>
                    <label htmlFor="archivo" className="label-input corbel-bold text-dark cursor-pointer">
                      <p>{nombreArchivo}</p>
                    </label>
                    <input type="file" name="my_file" id="archivo" accept="application/pdf" hidden required onChange={(event) => setNombreArchivo(event.target.files[0].name)}/>
                  </div>
                  <div className="w-100 ps-1 mb-3">
                    <input type="checkbox" name="check" id="check" required/>
                    <label htmlFor="check" className="ps-2 text-dark corbel-bold">Acepto los términos y condiciones</label>
                  </div>
                  <div className="w-100 d-flex justify-content-end">
                    <input type="submit" value="Enviar" className='btn-enviar-contacto corbel fs-5'/>
                  </div>
                </form>
              </div>
            </section>
            <aside className="contratar-aside">
              <img src={Ingenieros} alt="ingenieros" className="w-100" />
            </aside>
          </main>
        </div>
      </div>
    </>
  );
}

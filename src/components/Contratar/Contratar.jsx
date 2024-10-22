import "./Contratar.css";

import Ingenieros from "../../img/Contratar/ingenieros.png";

export function Contratar() {
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
                <form action="" className="contacto-form">
                  <div className="form-floating mb-3 short-input">
                    <input type="text" id='nombre' placeholder='' className='form-control' required autoComplete='off'/>
                    <label htmlFor='nombre'>Nombres</label>
                  </div>
                  <div className="form-floating mb-3 short-input">
                    <input type="text" id='nombre' placeholder='' className='form-control' required autoComplete='off'/>
                    <label htmlFor='nombre'>Apellidos</label>
                  </div>
                  <div className="form-floating mb-3 short-input">
                    <input type="email" id='email' placeholder='' className='form-control' required autoComplete='off'/>
                    <label htmlFor='email'>Email</label>
                  </div>
                  <div className="form-floating mb-3 short-input">
                    <input type="tel" id='email' placeholder='' className='form-control' required autoComplete='off'/>
                    <label htmlFor='email'>Celular</label>
                  </div>
                  <div className="form-floating mb-3 w-100">
                    <input type="text" id='empresa' placeholder='' className='form-control' required autoComplete='off'/>
                    <label htmlFor='empresa'>Direccióm donde reside</label>
                  </div>
                  <div className="form-floating mb-3 w-100">
                    <input type="text" id='empresa' placeholder='' className='form-control' required autoComplete='off'/>
                    <label htmlFor='empresa'>Puesto de interés</label>
                  </div>
                  <input type="file" name="" id="" />
                  <input type="checkbox" name="" id="" />
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

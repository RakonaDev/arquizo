export function activarXScroll(elemento) {
  const inicioHeight =
    document.getElementById("inicio").scrollHeight -
    document.getElementById("inicio").clientHeight +
    200;
  const nosotrosHeight =
    document.getElementById("nosotros").scrollHeight + inicioHeight;
  const nosotrosSpecHeight =
    document.getElementById("nosotrosSpec").scrollHeight + nosotrosHeight - 60;
  const proyectosHeight =
    document.getElementById("proyectos").scrollHeight +
    nosotrosSpecHeight +
    document.getElementById("proyectos-mostrar").clientHeight -
    60;
  const sectoresHeight =
    document.getElementById("sectores").scrollHeight +
    proyectosHeight -
    60;
  const serviciosHeight =
    document.getElementById("servicios").scrollHeight +
    sectoresHeight +
    200;
  const contactoHeight =
    document.getElementById("contacto").scrollHeight +
    serviciosHeight +
    340;
  const contratarHeight =
    document.getElementById("contratar").scrollHeight +
    contactoHeight -
    60;

  if (window.scrollY < inicioHeight) {
    EliminarActive(elemento);
  } else if (
    inicioHeight < window.scrollY &&
    window.scrollY < nosotrosSpecHeight
  ) {
    if (elemento[2].classList.contains("activo")) {
      return;
    } else {
      EliminarActive(elemento);
      elemento[2].classList.add("activo");
    }
  } else if (
    nosotrosSpecHeight < window.scrollY &&
    window.scrollY < proyectosHeight
  ) {
    if (elemento[1].classList.contains("activo")) {
      return;
    } else {
      EliminarActive(elemento);
      elemento[1].classList.add("activo");
    }
  }
  else if(proyectosHeight < window.scrollY && window.scrollY < sectoresHeight){
    if(elemento[0].classList.contains("activo")){
      return
    }
    else{
      EliminarActive(elemento)
      elemento[0].classList.add("activo")
    }
  }
  else if(sectoresHeight < window.scrollY && window.scrollY < serviciosHeight){
    if(elemento[3].classList.contains("activo")){
      return
    }
    else{
      EliminarActive(elemento)
      elemento[3].classList.add("activo")
    }
  }
  else if(serviciosHeight < window.scrollY && window.scrollY < contactoHeight){
    if(elemento[4].classList.contains("activo")){
      return
    }
    else{
      EliminarActive(elemento)
      elemento[4].classList.add("activo")
    }
  }
  else if(contactoHeight < window.scrollY && window.scrollY < contratarHeight){
    if(elemento[5].classList.contains("activo")){
      return
    }
    else{
      EliminarActive(elemento)
      elemento[5].classList.add("activo")
    }
  }
}

function EliminarActive(navItems) {
  navItems.forEach((item) => {
    item.classList.remove("activo");
  });
}

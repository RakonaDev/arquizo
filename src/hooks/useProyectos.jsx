import { preparandoTitulo } from "./useTitulo"

export function mostrarProyectos(mostrar, setMostrar, elemento, listaElementos){
  if(mostrar === elemento){
    return
  }

  if(window.innerWidth <= 1068){
    return
  }
  preparandoProyectos(mostrar, elemento, listaElementos)
  preparandoTitulo(mostrar, elemento, document.querySelectorAll(".titulo-item"))

  console.log("Seleccionaste: " + elemento)
  console.log("Estamos mostrando: " + mostrar)
  setMostrar(elemento)
}

function EliminandoMostrar(listaElementos) {
  listaElementos.forEach((elemento) => {
    elemento.classList.remove("mostrar")
  })
}

export function preparandoProyectos(mostrar, elemento, listaElementos){
  var elementoSeleccionado
  var elementoMostrado 

  if(elemento === "tramites"){
    elementoSeleccionado = listaElementos[0]
  }
  if(elemento === "arquitectura"){
    elementoSeleccionado = listaElementos[1]
  }
  if(elemento === "interiores"){
    elementoSeleccionado = listaElementos[2]
  }

  if(mostrar === "tramites"){
    elementoMostrado = listaElementos[0]
  }
  if(mostrar === "arquitectura"){
    elementoMostrado = listaElementos[1]
  }
  if(mostrar === "interiores"){
    elementoMostrado = listaElementos[2]
  }
  EliminandoMostrar(listaElementos)
  elementoMostrado.classList.add("retirado")
  elementoSeleccionado.classList.remove("retirado")
  elementoSeleccionado.classList.add("mostrar")
}
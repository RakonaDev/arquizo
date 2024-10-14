import { preparandoProyectos } from "./useProyectos"

export function seleccionarTitulo(mostrar, setMostrar ,elemento, listaElementos) {

  if(mostrar === elemento) return

  if(window.innerWidth > 1068){
    return
  }
  preparandoTitulo(mostrar, elemento, listaElementos)
  preparandoProyectos(mostrar, elemento, document.querySelectorAll(".proyecto-lista-content"))
  setMostrar(elemento)
}

export function preparandoTitulo(mostrar, elemento, listaElementos){
  var elementoSeleccionado
  var elementoMostrado


  if (mostrar === "tramites") {
    elementoMostrado = listaElementos[0]
  }
  else if (mostrar === "arquitectura") {
    elementoMostrado = listaElementos[1]
  }
  else if (mostrar === "interiores") {
    elementoMostrado = listaElementos[2]
  }

  if(elemento === "tramites"){
    elementoSeleccionado = listaElementos[0]
    elementoMostrado.classList.add("siguienteTitulo")
  }
  else if(elemento === "arquitectura"){
    elementoSeleccionado = listaElementos[1]
    if(mostrar === "tramites"){
      elementoMostrado.classList.add("anteriorTitulo")
    }
    else{
      elementoMostrado.classList.add("siguienteTitulo")
    }
  }
  else if(elemento === "interiores"){
    elementoSeleccionado = listaElementos[2]
    elementoMostrado.classList.add("anteriorTitulo")
  }

  console.log("Seleccionaste: " + elemento)
  console.log("Estamos mostrando: " + mostrar)
  console.log("ElementoMostrado: " + elementoMostrado)
  console.log("ElementoSeleccionado: " + elementoSeleccionado)
  elementoMostrado.classList.remove("mostrarTitulo")
  elementoSeleccionado.classList.remove("anteriorTitulo")
  elementoSeleccionado.classList.remove("siguienteTitulo")
  elementoSeleccionado.classList.add("mostrarTitulo")
}
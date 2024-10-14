export function mostrarProyectos(mostrar, setMostrar, elemento, listaElementos){
  var elementoSeleccionado
  var elementoMostrado 
  if(mostrar === elemento){
    return
  }

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

  console.log("Seleccionaste: " + elemento)
  console.log("Estamos mostrando: " + mostrar)
  setMostrar(elemento)
}

function EliminandoMostrar(listaElementos) {
  listaElementos.forEach((elemento) => {
    elemento.classList.remove("mostrar")
  })
}
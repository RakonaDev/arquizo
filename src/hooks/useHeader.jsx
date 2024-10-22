export function trasladarHeader(posicion, listaElementos){
  if(posicion == "siguiente"){
    listaElementos[0].classList.add("siguiente");
    listaElementos[1].classList.add("centro-container");
    listaElementos[0].classList.remove("centro-container");
    listaElementos[1].classList.remove("anterior");
  }else{
    listaElementos[1].classList.add("anterior")
    listaElementos[1].classList.remove("centro-container");
    listaElementos[0].classList.add("centro-container");
    listaElementos[0].classList.remove("siguiente");
  }
}
import './App.css'
import { Contacto } from './components/Contacto/Contacto'
import { Contratar } from './components/Contratar/Contratar'
import { Header } from './components/Header/Header'
import { Inicio } from './components/Inicio/Inicio'
import { Nosotros } from './components/Nosotros/Nosotros'
import { NosotrosSec } from './components/NosotrosSec/NosotrosSec'
import { ProyectosHeader } from './components/Proyectos/Proyectos'
import { ProyectosMostrar } from './components/ProyectosMostrar/ProyectosMostrar'
import { Sectores } from './components/Sectores/Sectores'
import { Servicios } from './components/Servicios/Servicios'

function App() {

  return (
    <>
      <Header></Header>
      <Inicio></Inicio>
      <Nosotros></Nosotros>
      <NosotrosSec></NosotrosSec>
      <ProyectosHeader></ProyectosHeader>
      <ProyectosMostrar></ProyectosMostrar>
      <Sectores></Sectores>
      <Servicios></Servicios>
      <Contacto></Contacto>
      <Contratar></Contratar>
    </>
  )
}

export default App

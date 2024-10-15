import './App.css'
import { Header } from './components/Header/Header'
import { Inicio } from './components/Inicio/Inicio'
import { Nosotros } from './components/Nosotros/Nosotros'
import { NosotrosSec } from './components/NosotrosSec/NosotrosSec'
import { ProyectosHeader } from './components/Proyectos/Proyectos'
import { ProyectosMostrar } from './components/ProyectosMostrar/ProyectosMostrar'
import { Sectores } from './components/Sectores/Sectores'

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
    </>
  )
}

export default App

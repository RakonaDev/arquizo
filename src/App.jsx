import './App.css'
import { Header } from './components/Header/Header'
import { Inicio } from './components/Inicio/Inicio'
import { Nosotros } from './components/Nosotros/Nosotros'
import { NosotrosSec } from './components/NosotrosSec/NosotrosSec'
import { ProyectosHeader } from './components/Proyectos/Proyectos'

function App() {

  return (
    <>
      <Header></Header>
      <Inicio></Inicio>
      <Nosotros></Nosotros>
      <NosotrosSec></NosotrosSec>
      <ProyectosHeader></ProyectosHeader>
    </>
  )
}

export default App

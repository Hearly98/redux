
import './App.css'
import { CrearProfesor } from './components/CrearProfesor';
function App() {
  return (
    <>
    <div className='p-4'>
    <h1 className='text-3xl font-semibold text-blue-950'>Profesores</h1>
    </div>
    <button className='p-2 bg-purple-600 text-white' >Crear Profesor</button>
    <CrearProfesor  />
  </>
  )
}

export default App

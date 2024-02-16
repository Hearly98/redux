
import './App.css'
import './index.css'
import { CrearProfesor } from './components/CrearProfesor';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFormVisibility } from './redux/profesor/profesorSlice';
import Sidebar from './components/Sidebar';
import { OffCanvasForm } from './components/OffCanvasForm';
export function App() {
  const dispatch = useDispatch();
  const isFormVisible = useSelector((state) => state.profesor.isFormVisible);
  return (
    <>
    <div className='p-4'>
    <h1 className='text-3xl font-semibold text-blue-950'>Profesores</h1>
    </div>
    <button className='p-2 bg-purple-600 text-white rounded' onClick={() => dispatch(toggleFormVisibility())} >Crear Profesor</button>
    {isFormVisible && <OffCanvasForm />}
  </>
  )
}

export default App

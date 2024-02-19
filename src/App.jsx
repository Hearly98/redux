
import React, {useState} from 'react';
import Sidebar from './components/Sidebar'
import { OffCanvasForm } from './components/OffCanvasForm';

const App = () => {
  const [showOffCanvasForm, setShowOffCanvasForm] = useState(false);
  const [action, setAction] = useState('');

  const handleCreateProfesor = () => {
    setAction('crearProfesor');
    setShowOffCanvasForm(true);
  };
  const handleUpdateProfesor = () => {
    setAction('editarProfesor');
    setShowOffCanvasForm(true);
  };
  const handleCreateAlumno = () => {
    setAction('crearAlumno');
    setShowOffCanvasForm(true);
  };
  const handleCloseForm = () => {
    setShowOffCanvasForm(false);
  }
  return (
      <div className='flex'>
        <div>
          <Sidebar />
        </div>
        <div className='flex-1'>
        <h1>Profesores</h1>
        <button className=' px-4 py-2 text-white bg-purple-600 hover:bg-purple-700 rounded transition duration-300 ease-in-out mx-4' onClick={() => handleCreateProfesor('crearProfesor')}>Crear Profesor</button>
        <button className=' px-4 py-2 text-white bg-purple-600 hover:bg-purple-700 rounded transition duration-300 ease-in-out' onClick={() => handleCreateAlumno('crearAlumno')}>Crear Alumno</button>
        {showOffCanvasForm  && (<OffCanvasForm action={action} handleCloseForm={handleCloseForm}/>)}
      </div>
        </div>
    );
  };

export default App;

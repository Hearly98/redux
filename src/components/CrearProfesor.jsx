// components/CrearProfesor.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { createProfesor, toggleFormVisibility } from '../redux/profesor/profesorSlice';

export const CrearProfesor = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [materias, setMaterias] = useState('');

  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProfesor({ nombre, apellido, usuario, password, email, celular, materias }));
  };

  return (
    <>
   
    <div className="fixed top-0 right-0 z-40 w-80 min-h-screen overflow-y-auto bg-white border-l-4 bg-red transition-transform h-full">
      <div className='bg-gradient-to-br from-blue-400 to-purple-500 py-2 px-3'>
      <h3 className='text-lg font-bold text-blue-950'>Crear Profesor</h3>
      </div>
      <div className='grid grid-rows-[auto,auto] gap-4 h-full'> 
      <form onSubmit={handleSubmit} className='grid gap-1 px-3 mt-3'>
        <div className='grid'>
        <label>Nombre *</label>
        <input className='bg-cyan-50 border rounded px-3 border-gray-300' value={nombre} onChange={(e) => setNombre(e.target.value)}/>
        </div>
        <div className='grid'>
        <label>Apellido *</label>
        <input className='bg-cyan-50 border rounded px-3 border-gray-300' value={apellido} onChange={(e) => setApellido(e.target.value)} />
        </div>
        <div className='grid'>
        <label>Usuario *</label>
        <input className='bg-cyan-50 border rounded px-3 border-gray-300' value={usuario} onChange={(e) => setUsuario(e.target.value)} />
        </div>
        <div className='grid'>
        <label >Contraseña *</label>
        <input className='bg-cyan-50 border bord rounded px-3 border-gray-300' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='grid'>
        <label >Email</label>
        <input className='bg-cyan-50 border rounded px-3 border-gray-300' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='grid'>
        <label >Celular</label>
        <input className='bg-cyan-50 border rounded px-3 border-gray-300' value={celular} onChange={(e) => setCelular(e.target.value)} />
        </div>
        <div className='grid'>
        <label >Materias</label>
        <input className='bg-cyan-50 border rounded px-3  border-gray-300' value={materias} onChange={(e) => setMaterias(e.target.value)} />
        </div>
      </form>
      
      <div className='grid grid-cols-2 gap-4 p-3 bg-gray-100 mt-auto border border-gray-300'>
      <button className='w-full px-4 py-2 text-white bg-purple-600 rounded' type="submit">Crear</button>
      <button className="w-full px-4 py-2 text-purple-600 border border-purple-600 rounded" type="button" onClick={() => dispatch(toggleFormVisibility())}>Cancelar</button>
      </div>
      </div>
     
    </div>
     
    </>
  );
};

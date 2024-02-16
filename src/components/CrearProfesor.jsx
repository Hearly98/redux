// components/CrearProfesor.jsx
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
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
  const successMessage = useSelector((state) => state.profesor.successMessage);
  const errorMessage = useSelector((state) => state.profesor.error);
  const isFormVisible = useSelector(state => state.profesor.isFormVisible);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProfesor({ nombre, apellido, usuario, password, email, celular, materias }));
  };

  return (

    <div className={` fixed top-0 right-0 z-40 w-80 h-screen overflow-y-auto bg-white border-l transition-transform ${!isFormVisible  ? 'translate-x-full' : ""}`}>

      <div className='flex flex-col h-full'> 
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

      <div className='bg-gradient-to-br from-blue-400 to-purple-600 py-2 px-3 flex justify-between items-center'>
      <h3 className='text-lg font-bold text-blue-950'>Crear Profesor</h3>
      <a className='cursor-pointer' onClick={() => dispatch(toggleFormVisibility())}>
      <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3333 13.8334L2.66663 3.16675M13.3333 3.16675L2.66663 13.8334" stroke="black" stroke-width="2" stroke-linecap="round"/>
      </svg>
      </a>
      </div>

      <form onSubmit={handleSubmit}  className=' flex flex-col h-full overflow-y-auto'>
    
      <div className='flex flex-col flex-1 p-2 gap-2 font-poppins text-base'>
        <div className='grid'>
        <label>Nombre *</label>
        <input className='bg-cyan-50 border rounded py-1.5 px-3 border-gray-400 font-medium' value={nombre} onChange={(e) => setNombre(e.target.value)}/>
        </div>
        <div className='grid'>
        <label>Apellido *</label>
        <input className='bg-cyan-50 border rounded py-1.5 px-3 border-gray-400 font-medium' value={apellido} onChange={(e) => setApellido(e.target.value)} />
        </div>
        <div className='grid'>
        <label>Usuario *</label>
        <input className='bg-cyan-50 border rounded py-1.5 px-3 border-gray-400 font-medium' value={usuario} onChange={(e) => setUsuario(e.target.value)} />
        </div>
        <div className='grid'>
        <label >Contraseña *</label>
        <input className='bg-cyan-50 border bord rounded py-1.5 px-3 border-gray-400 font-medium' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='grid'>
        <label >Email</label>
        <input className='bg-cyan-50 border rounded py-1.5 px-3 border-gray-400 font-medium' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='grid'>
        <label >Celular</label>
        <input className='bg-cyan-50 border rounded py-1.5 px-3 border-gray-400 font-medium' value={celular} onChange={(e) => setCelular(e.target.value)} />
        </div>
        <div className='grid'>
        <label >Materias Asociados</label>
        <input className='bg-cyan-50 border rounded py-1.5 px-3  border-gray-400 font-medium' value={materias} onChange={(e) => setMaterias(e.target.value)} />
        </div>
        </div>
        <div className='p-3 bg-gray-200 border-t border-gray-300 flex gap-4'>
        <button className=' px-4 py-2 text-white bg-purple-600 hover:bg-purple-700 rounded transition duration-300 ease-in-out' type="submit">Crear</button>
        <button className=" px-4 py-2 text-purple-600 border border-purple-600 rounded cursor-pointer text-center bg-white" type="button" onClick={() => dispatch(toggleFormVisibility())}>Cancelar</button>
        </div>
      </form>
      </div>
    </div>

  );
};  

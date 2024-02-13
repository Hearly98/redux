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
    <div className="border bg-slate-700">
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input value={nombre} onChange={(e) => setNombre(e.target.value)}/>
        <label>Apellido</label>
        <input value={apellido} onChange={(e) => setApellido(e.target.value)} />
        <label>Usuario</label>
        <input value={usuario} onChange={(e) => setUsuario(e.target.value)} />
        <label>Contraseña</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Celular</label>
        <input value={celular} onChange={(e) => setCelular(e.target.value)} />
        <label>Materias</label>
        <input value={materias} onChange={(e) => setMaterias(e.target.value)} />
        <button type="submit">Guardar</button>
        <button type="button" onClick={() => dispatch(toggleFormVisibility())}>Cancelar</button>
      </form>
    </div>
  );
};

// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import profesorSlice from '../redux/profesor/profesorSlice';
import materiasSlice from '../redux/profesor/materiasSlice';
import alumnoSlice from '../redux/alumno/alumnoSlice';
export const store = configureStore({
  reducer: {
    profesor: profesorSlice,
    materias:materiasSlice,
    alumnos:alumnoSlice
  },
});

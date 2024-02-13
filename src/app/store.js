// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import profesorSlice from '../redux/profesor/profesorSlice';

export const store = configureStore({
  reducer: {
    profesor: profesorSlice,
  },
});

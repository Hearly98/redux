// features/profesorSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Acción asíncrona para crear un nuevo profesor
export const createProfesor = createAsyncThunk(
  'profesor/createProfesor',
  async (profesorData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:3000/profesores', profesorData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.toString());
    }
  }
);

const initialState = {
  profesores: [],
  isFormVisible: false, // Estado para controlar la visibilidad del formulario
  isLoading: false,
  error: null,
  successMessage: '',
};

const profesorSlice = createSlice({
  name: 'profesor',
  initialState,
  reducers: {
    toggleFormVisibility: (state) => {
      state.isFormVisible = !state.isFormVisible;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProfesor.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.successMessage = '';
      })
      .addCase(createProfesor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profesores.push(action.payload);
        state.isFormVisible = false;
        state.successMessage = 'Profesor creado con éxito!';
      })
      .addCase(createProfesor.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {  toggleFormVisibility } = profesorSlice.actions;

export default profesorSlice.reducer;

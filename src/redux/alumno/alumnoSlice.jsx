
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const createAlumno = createAsyncThunk(
  'alumno/createProfesor',
  async (alumnoData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:3000/alumnos', {...alumnoData, estado:true});
      return response.data;
    } catch (error) {
      return rejectWithValue(error.toString());
    }
  }
);

const initialState = {
  alumnos: [],
  tutores:[],
  isLoading: false,
  error: null,
  successMessage: '',
};

const alumnoSlice = createSlice({
  name: 'alumno',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createAlumno.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.successMessage = '';
      })
      .addCase(createAlumno.fulfilled, (state, action) => {
        state.isLoading = false;
        state.alumnos.push(action.payload);
        state.successMessage = 'Alumno creado con éxito!';
      })
      .addCase(createAlumno.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});


export default alumnoSlice.reducer;

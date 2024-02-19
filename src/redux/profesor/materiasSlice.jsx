import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const cargarMaterias =createAsyncThunk(
    'profesor/cargarMaterias',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get('http://localhost:3000/materias');
        return response.data.materias;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  const initialState ={
    materias:[],
    isLoading:false,
    error:null,
  };

  const materiasSlice = createSlice({
    name:'materias',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
      builder 
      .addCase(cargarMaterias.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(cargarMaterias.fulfilled, (state, action) => {
        state.isLoading = false;
        state.materias = action.payload;
      })
      .addCase(cargarMaterias.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    },
  });

  export default materiasSlice.reducer;
 
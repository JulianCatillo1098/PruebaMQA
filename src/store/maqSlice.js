import { createSlice } from "@reduxjs/toolkit";

export const mqaSlice = createSlice({
  name: "STORE",
  initialState: {
    nombre: null,
    preguntas: false,
    numeroIngresado: null,
    boton: false,
  },

  reducers: {
    nombreUsuario: (state, { payload }) => {
      state.nombre = payload;
    },

    ContenedorPreguntas: (state) => {
      state.preguntas = true;
    },

    botonsolucion: (state) => {
      state.boton = !state.boton;
    },
  },
});

export const { nombreUsuario, ContenedorPreguntas, botonsolucion } =
  mqaSlice.actions;

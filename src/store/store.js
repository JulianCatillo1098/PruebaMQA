import { configureStore } from "@reduxjs/toolkit";
import { mqaSlice } from "./maqSlice";

export const store = configureStore({
  reducer: {
    Usuario: mqaSlice.reducer,
  },
});
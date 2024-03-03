import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { IngresoUsuario } from '../components/IngresoUsuario';
import { PrimerPunto } from '../components/PrimerPunto';
import { SegundoPunto } from '../components/SegundoPunto';

export const AppRouter = () => {

  return (
    <Routes>
      <Route path='/' element={<IngresoUsuario />} />
      <Route path='/respuesta_primer_punto' element={<PrimerPunto />} />
      <Route path='/respuesta_segundo_punto' element={<SegundoPunto />} />
      <Route path='*' element={<IngresoUsuario/>} />
    </Routes>
    
  );
};
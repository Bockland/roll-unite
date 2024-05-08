import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RuletaEquipos, SeleccionJugadores } from '../pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/ruleta-equipos/*' element={<RuletaEquipos />} />
      <Route path='/*' element={<SeleccionJugadores />} />
    </Routes>
  )
}

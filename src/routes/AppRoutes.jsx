import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RuletaEquipos, SeleccionJugadores } from '../pages'
import { HomePage } from '../pages/HomePage'
import { ConfigPage } from '../pages/ConfigPage'

export const AppRoutes = () => {
  return (
    <Routes>
      
      <Route path='/config-game' element={<ConfigPage />} />
      <Route path='/seleccion-jugadores' element={<SeleccionJugadores />} />
      <Route path='/ruleta-partida' element={<RuletaEquipos />} />
      
      <Route path='/*' element={<HomePage />} />

    </Routes>
  )
}

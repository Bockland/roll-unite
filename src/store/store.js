import { configureStore } from '@reduxjs/toolkit'
import jugadorSlice from './jugador/jugadorSlice'
import configGameSlice from './config/configGameSlice'

export const store = configureStore({
    reducer: {
      configGame: configGameSlice,
      jugador: jugadorSlice,
    }
})
import { configureStore } from '@reduxjs/toolkit'
import seleccionSlice from './seleccion/seleccionSlice'

export const store = configureStore({
    reducer: {
      seleccion: seleccionSlice
    }
})
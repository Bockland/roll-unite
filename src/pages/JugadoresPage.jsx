import React from 'react'
import { useJugadores } from '../hooks/useJugadores'
import { AppLayout } from '../layouts/AppLayout';

export const JugadoresPage = () => {

    const { jugadores, agregarJugadores } = useJugadores();



  return (
    <AppLayout>
        
    </AppLayout>
  )
}

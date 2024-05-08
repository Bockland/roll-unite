import React from 'react'
import { JugadoresEquipo } from '../components/JugadoresEquipo'
import { useSeleccion } from '../hooks/useSeleccion'
import { Button } from '@mui/material';
import { Warning } from '@mui/icons-material';

export const SeleccionJugadores = () => {

    const { equipo_1, equipo_2, setEquipo_1, setEquipo_2, confirmarEquipos, ruletaJugadores} = useSeleccion();

    const confirmar = () => {
        confirmarEquipos()
    }

    const sorteo = () => {
        ruletaJugadores()
    }


    return (
        <>
            <div className='selector-jugadores'>
                <div className='div-selector-jugador-left'>
                    
                    <div className='div-selector-jugador'>
                        <div className='div-equipo-seleccion'>
                                <Button 
                                variant="contained" 
                                color={"success"}
                                sx={{width: '100%', padding: '10px'}}
                            >
                                Equipo 1
                            </Button>
                        </div>
                        <JugadoresEquipo equipo={equipo_1} setEquipo={setEquipo_1}/>
                    </div>
                </div>

                <div className='div-selector-jugador-right'>
                    <div className='div-selector-jugador'>
                        <div className='div-equipo-seleccion'>
                                <Button 
                                variant="contained" 
                                color={"success"}
                                sx={{width: '100%', padding: '10px'}}
                            >
                                Equipo 2
                            </Button>
                        </div>
                        <JugadoresEquipo equipo={equipo_2} setEquipo={setEquipo_2}/>
                    </div>
                </div>
            </div>
            <div className='div-boton-seleccion-equipos'>
                <Button 
                    variant="contained" 
                    color={"warning"}
                    sx={{width: '40%', marginTop: '20px', padding: '10px', float: 'right'}}
                    onClick={confirmar}
                >
                    Confirmar Equipos
                </Button>

                <Button 
                    variant="contained" 
                    color={"warning"}
                    sx={{width: '40%', marginTop: '20px', padding: '10px', float: 'left'}}
                    onClick={sorteo}
                >
                    Roll
                </Button>
            </div>
        </>
    )
}

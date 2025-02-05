import React from 'react'
import { JugadoresEquipo } from '../components/JugadoresEquipo'
import { useSeleccion } from '../hooks/useSeleccion'
import { Box, Button, Typography } from '@mui/material';
import { Warning } from '@mui/icons-material';
import { MenuLayout } from '../layouts/MenuLayout';
import { useJugadores } from '../hooks/useJugadores';
import { useNavigate } from 'react-router-dom';

export const SeleccionJugadores = () => {

    const { equipo_1, equipo_2, setEquipo_1, setEquipo_2, confirmarEquipos, ruletaJugadores} = useJugadores();

    const navegate = useNavigate()

    const confirmar = () => {
        confirmarEquipos()
    }

    const sorteo = () => {
        ruletaJugadores()
    }

    const backconfig = () => {
        navegate('/config-game')
    }

    return(
        <MenuLayout>
            <div className='div-selector-jugadores'>
                <div className='div-selector-jugador-left'>
                    
                    <div className='div-selector-jugador'>
                        <div className='div-equipo-seleccion'>
                            <Box 
                                sx={{
                                    backgroundColor: 'rgb(81, 53, 97)',
                                    color: 'white',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    textAlign: 'center',
                                }}
                            >
                                <Typography variant="h5">
                                    Equipo 1
                                </Typography>
                            </Box>
                        </div>
                        <JugadoresEquipo equipo={equipo_1} setEquipo={setEquipo_1}/>
                    </div>
                </div>

                <div className='div-selector-jugador-botones'>

                    <Button 
                        variant="contained" 
                        onClick={backconfig}
                        sx={{
                            backgroundColor: 'rgb(47, 92, 176)',
                            border: '3px solid rgb(18, 45, 135)',
                            ":hover": {
                                backgroundColor: 'rgb(28, 145, 248)',
                            },
                            color: 'white',
                            padding: '1%',
                            margin: '1%',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            fontSize: '1.2em',
                            width: '100%'
                        }}
                    >
                        Configuración
                    </Button>

                    <Button 
                        variant="contained" 
                        onClick={sorteo}
                        sx={{
                            backgroundColor: 'rgb(205, 97, 24)',
                            border: '3px solid rgb(152, 78, 29)',
                            ":hover": {
                                backgroundColor: 'rgb(248, 116, 28)',
                            },
                            color: 'white',
                            padding: '1%',
                            margin: '1%',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            fontSize: '1.2em',
                            width: '100%'
                        }}
                    >
                        Roll
                    </Button>

                    <Button 
                        variant="contained"
                        onClick={confirmar}
                        sx={{
                            backgroundColor: 'rgb(13, 123, 42)',
                            border: '3px solid rgb(8, 79, 25)',
                            ":hover": {
                                backgroundColor: 'rgb(23, 187, 70)',
                            },
                            color: 'white',
                            width: '100%',
                            padding: '3%',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            fontSize: '1.2em'
                        }}
                    >
                        Confirmar Equipos
                    </Button>
                </div>

                <div className='div-selector-jugador-right'>
                    <div className='div-selector-jugador'>
                        <div className='div-equipo-seleccion'>
                            <Box 
                                sx={{
                                    backgroundColor: 'rgb(222, 125, 60)',
                                    color: 'white',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    textAlign: 'center',
                                }}
                            >
                                <Typography variant="h5">
                                    Equipo 2
                                </Typography>
                            </Box>
                        </div>
                        <JugadoresEquipo equipo={equipo_2} setEquipo={setEquipo_2}/>
                    </div>
                </div>

                
            </div>
        </MenuLayout>
    )

    /*return (
        
    )*/
}

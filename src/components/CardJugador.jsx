import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import { IsNullorEmpy } from '../functions/comunes'
import { atacante } from '../assets/atacante'
import img_atacante from '../assets/Polygon.png'

export const CardJugador = ({jugador, getImg}) => {

    const getFondo = (rol) => {
        let fondo = "";

        if(rol === "defensivo") fondo = "card-player-defensivo"
        if(rol === "agil") fondo = "card-player-agil"
        if(rol === "atacante") fondo = "card-player-atacante"
        if(rol === "equilibrado") fondo = "card-player-equilibrado"
        if(rol === "soporte") fondo = "card-player-soporte"

        if(fondo === "") fondo = "card-player"

        return fondo;
    }


  return (
    <Card 
        sx={{ 
            display: 'flex', 
            marginBottom: '20px', 
            padding: '10px',
        }}

        className={(getFondo(jugador.pokemon.rol))}
    >
        <Box 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                width: '70%',                
            }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <div className='div-card-player'>
                    <Typography 
                        component="div" 
                        variant="h3" 
                        sx={{
                            marginTop: '', 
                            marginLeft: '10%', 
                            color: 'white',
                            fontFamily: '"Exo 2", sans-serif',
                            fontSize: '2.7rem',
                            fontStyle: 'italic',
                            fontWeight: 'bold',
                        }}
                    >
                        {jugador.name}
                    </Typography>
                </div>
                
                <Typography 
                    variant="subtitle1" 
                    color="text.secondary" 
                    component="div"
                    sx={{
                        marginTop: '0.1rem', 
                        marginLeft: '10%', 
                        color: 'white',
                        fontStyle: 'italic',
                        fontSize: '1.2rem',
                    }}
                >
                    {jugador.pokemon.name}
                </Typography>
            </CardContent>
        </Box>
        {
            (IsNullorEmpy(jugador.pokemon)) ? <></> : (
                <CardMedia
                    component="img"
                    sx={{ 
                        width: 151, 
                        maxWidth: 110, 
                        float: 'right',
                        marginLeft: '40px',
                        //border: '1px solid #19072d;',
                        borderRadius: '5px',
                        padding: '3px',
                        //backgroundColor: 'white'
                        
                    }}
                    image={getImg(jugador.pokemon.name)}
                    alt="Live from space album cover"
                />
                
                
            )
        }
        
    </Card>
  )
}

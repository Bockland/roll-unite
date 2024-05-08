import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import { IsNullorEmpy } from '../functions/comunes'

export const CardJugador = ({jugador, getImg}) => {
  return (
    <Card sx={{ display: 'flex', backgroundColor: (IsNullorEmpy(jugador.pokemon)) ? '#19072d' : '#19072d', marginBottom: '20px', padding: '10px'}}>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography 
                    component="div" 
                    variant="h2" 
                    sx={{
                        marginTop: '1.5rem', 
                        marginLeft: '10%', 
                        color: 'white'
                    }}
                >
                    {jugador.name}
                </Typography>
            </CardContent>
        </Box>
        {
            (IsNullorEmpy(jugador.pokemon)) ? <></> : (
                <CardMedia
                    component="img"
                    sx={{ width: 151, maxWidth: 130, float: 'right' }}
                    image={getImg(jugador.pokemon)}
                    alt="Live from space album cover"
                />
                
                
            )
        }
        
    </Card>
  )
}

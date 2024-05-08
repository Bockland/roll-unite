import { Input, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { WhiteTextField } from './elements/styles';

export const JugadoresEquipo = ({equipo, setEquipo}) => {

    const ingresoJugador = (target, id) => {
        const new_equipo = equipo.map((j) => {
            if(j.id === id) {
                return {
                    ...j,
                    name: target.value
                }
            } else return j;
        })

        setEquipo(new_equipo)
    }

    return (
        <>
            {
                equipo.map((j) => {
                    return (
                        <WhiteTextField 
                            key={j.id}
                            label={`Jugador ${j.id}`} 
                            value={j.name}
                            onChange={(e) => ingresoJugador(e.target, j.id)}
                            focused
                        />
                    )
                })
            }
        </>
    )
}

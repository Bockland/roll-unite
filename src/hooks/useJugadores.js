import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setEquipo1, setEquipo2, setJugadores } from '../store/jugador/jugadorSlice';
import { useNavigate } from 'react-router-dom';
import { shuffle } from '../functions/comunes';

export const useJugadores = () => {

    const { jugadores, equipo_1, equipo_2 } = useSelector((state) => state.jugador)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const agregarJugadores = (jugadores) => {
        dispatch(setJugadores({jugadores: jugadores}))
    }

    const setEquipo_1 = (value) => {
        dispatch(setEquipo1({equipo_1: value}))
    }

    const setEquipo_2 = (value) => {
        dispatch(setEquipo2({equipo_2: value}))
    }

    const confirmarEquipos = () => {
        const val_equipo1 = equipo_1.some((j) => j.name === "" || j.name === null || j.name === undefined)
        const val_equipo2 = equipo_2.some((j) => j.name === "" || j.name === null || j.name === undefined)

        if(val_equipo1 || val_equipo2) {
            Swal.fire({
                title: 'Error en equipos',
                text: 'Uno de los equipos no se encuentra completado',
                icon: 'error',
                confirmButtonText: 'Volver'
            })
        } else {
            navigate('/ruleta-partida')
        }
    }

    const ruletaJugadores = () => {
        const pool_jugadores = [];

        equipo_1.forEach((j) => pool_jugadores.push({...j, id: null}))
        equipo_2.forEach((j) => pool_jugadores.push({...j, id: null}))

        shuffle(pool_jugadores);

        const new_equipo1 = [
            {...pool_jugadores[0], id: 1},
            {...pool_jugadores[1], id: 2},
            {...pool_jugadores[2], id: 3},
            {...pool_jugadores[3], id: 4},
            {...pool_jugadores[4], id: 5},
        ]

        const new_equipo2 = [
            {...pool_jugadores[5], id: 1},
            {...pool_jugadores[6], id: 2},
            {...pool_jugadores[7], id: 3},
            {...pool_jugadores[8], id: 4},
            {...pool_jugadores[9], id: 5},
        ]

        setEquipo_1(new_equipo1);
        setEquipo_2(new_equipo2);


    }

    return {
        equipo_1,
        equipo_2,
        jugadores,
        setEquipo_1,
        setEquipo_2,
        confirmarEquipos,
        ruletaJugadores,
        agregarJugadores
    }
}

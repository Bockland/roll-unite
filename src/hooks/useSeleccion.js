import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setEquipo1, setEquipo2 } from '../store/seleccion/seleccionSlice';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { shuffle } from '../functions/comunes';

export const useSeleccion = () => {

    const { equipo_1, equipo_2 } = useSelector(state => state.seleccion)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const equipo_1_memo = useMemo(() => equipo_1, [equipo_1])
    const equipo_2_memo = useMemo(() => equipo_2, [equipo_2])

    const setEquipo_1 = (jugadores) => {
        dispatch(setEquipo1({equipo_1: jugadores}))
    }

    const setEquipo_2 = (jugadores) => {
        dispatch(setEquipo2({equipo_2: jugadores}))
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
            navigate('/ruleta-equipos')
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

        console.log(new_equipo1)
        console.log(new_equipo2)

        setEquipo_1(new_equipo1);
        setEquipo_2(new_equipo2);


    }

    

    return {
        equipo_1: equipo_1_memo,
        equipo_2: equipo_2_memo,
        setEquipo_1,
        setEquipo_2,
        confirmarEquipos,
        ruletaJugadores
    }
}

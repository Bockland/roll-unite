import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSeleccion } from '../hooks/useSeleccion'
import { CardJugador } from '../components/CardJugador'
import { PoolPokemones } from '../components/PoolPokemones'
import { IsNullorEmpy, shuffle } from '../functions/comunes'
import { usePokemon } from '../hooks/usePokemon'
import { pokemones } from '../config/config_pokemones'

export const RuletaEquipos = () => {

  const navigate = useNavigate()
  const { equipo_1, equipo_2, setEquipo_1 , setEquipo_2} = useSeleccion();
  const { getPokemonImg } = usePokemon();

  const [pool, setPool] = useState(pokemones);
  const [posicion, setPosicion] = useState(1);
  const [equipo, setEquipo] = useState(1);

  const volver = () => {
    const new_equipo1 = equipo_1.map((j) => {
      return { ...j, pokemon: '' }
    })

    const new_equipo2 = equipo_2.map((j) => {
      return { ...j, pokemon: '' }
    })

    setEquipo_1(new_equipo1)
    setEquipo_2(new_equipo2)
    setPosicion(1)
    setEquipo(1)

    navigate('/')

  }

  const rollPokemon = () => {

    let new_pool = pool;
    shuffle(new_pool);
    const poke = new_pool[0];

    console.log(new_pool)
    console.log(poke)

    if(equipo === 1)
    {
      const new_equipo1 = equipo_1.map((j) => {
        if(j.id === posicion) 
          return { ...j, pokemon: poke }
         else return j 
      })

      setEquipo_1(new_equipo1);
      setEquipo(2);

      const val = equipo_2.some((j) => j.id === posicion && IsNullorEmpy(j.pokemon))
      if(val === false) setPosicion(posicion+1) 

    } else {
      const new_equipo2 = equipo_2.map((j) => {
        if(j.id === posicion) 
          return { ...j, pokemon: poke }
         else return j 
      })

      setEquipo_2(new_equipo2);
      setEquipo(1);

      const val = equipo_1.some((j) => j.id === posicion && IsNullorEmpy(j.pokemon))
      if(val === false) setPosicion(posicion+1) 
    }

    const new_pool2 = new_pool.filter((p) => p.name !== poke.name)
    setPool(new_pool2)
  }

  return (
    <>
      
      <div className='div-sorteo-player-1'>
        {
          equipo_1.map((j) => {
            return (<CardJugador jugador={j} getImg={getPokemonImg} />)
          })
        }
      </div>
      
      <div className='div-sorteo-pokemon'>
        <PoolPokemones roll={rollPokemon} pool={pool} volver={volver}/>
      </div>

      <div className='div-sorteo-player-2'>
        { 
          equipo_2.map((j) => {
            return (<CardJugador jugador={j} getImg={getPokemonImg}/>)
          })
        }
      </div>

      
    </>
  )
}

import { Button } from '@mui/material'
import React from 'react'

export const PoolPokemones = ({roll, pool, volver}) => {


  return (
    <div className='div-roll'>
      <Button
          variant='contained'
          onClick={roll}
      >
        Roll
      </Button>
      <Button 
          variant="contained" 
          color={"warning"}
          onClick={() => volver()}
        >
          Volver
        </Button>
    </div>
  )
}

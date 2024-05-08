import { Button } from '@mui/material'
import React from 'react'

export const PoolPokemones = ({roll, pool}) => {


  return (
    <>
        <Button
            variant='contained'
            onClick={roll}
        >
            Roll
        </Button>
    </>
  )
}

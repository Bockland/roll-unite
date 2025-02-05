import { Button, CardMedia } from '@mui/material'
import React from 'react'
import { logo_tvf, logo_unite } from '../assets'

export const PoolPokemones = ({roll, pool, volver}) => {

  return (
    <div className='div-roll'> 

      <div className='div-pool-logo'>
        <CardMedia
            component="img"
            sx={{ 
              width: '100%', 
              borderRadius: '5px',
              padding: '3px',              
            }}
            image={logo_unite}
            alt="Live from space album cover"
        />
      </div>        
    
      <div className='div-dice-button'>
        <button
          
          onClick={roll}
          className="dice-button"
        >
          🎲
        </button>
      </div>

      <div className='div-roll-volver'>
        <Button 
          variant="contained"             
          onClick={() => volver()}
          sx={{
            backgroundColor: 'rgb(205, 97, 24)' ,
            border: '3px solid rgb(152, 78, 29)',
            ":hover": {
                backgroundColor: 'rgb(248, 116, 28)',
                
            },
            color: 'white',
            width: '100%',
            padding: '1%',
            margin: '1%',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '1.2em'
          }}
        >
          Volver
        </Button>
      </div>
    </div>
  )
}

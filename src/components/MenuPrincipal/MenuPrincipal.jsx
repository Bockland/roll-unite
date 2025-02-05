import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGame } from '../../hooks/useGame';

export const MenuPrincipal = () => {

    const navegate = useNavigate();
    const { resetStateConfig } = useGame();

    useEffect(() => {
        resetStateConfig();
    }, []);

    return (
        <div className='div-menu-principal'>
           

            <div className='div-menu-principal-boton'>
                <Button
                    variant="contained" 
                    color={"warning"}
                    onClick={() => { navegate("/config-game") }}
                > Modo Custom </Button>
            </div>
        </div>
    )
}

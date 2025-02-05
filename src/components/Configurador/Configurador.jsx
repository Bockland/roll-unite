import React from 'react'
import { useGame } from '../../hooks/useGame';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { IsNullorUndefinedEmpty } from '../../functions/comunes';
import Swal from 'sweetalert2';

export const Configurador = () => {

    const navegate = useNavigate();
    const { roles, ex, modo_unico, changeRoles, changeEx, pool } = useGame();
    
    const handleChangeRoles = (name) => {           
        changeRoles(name, !roles[name]);
    }

    const goTeams = () => {
        if(IsNullorUndefinedEmpty(roles)) {
            Swal.fire({
                icon: "error",
                title: "Error de configuracion",
                text: "No hay suficientes pokemones en el pool",                
            });

            return;
        }

        if(IsNullorUndefinedEmpty(pool)) {
            Swal.fire({
                icon: "error",
                title: "Error de configuracion",
                text: "No hay suficientes pokemones en el pool",                
            });

            return;
        }

        if(pool.length < 10) {
            Swal.fire({
                icon: "error",
                title: "Error de configuracion",
                text: "No hay suficientes pokemones en el pool",                
            });

            return;
        }

        navegate("/seleccion-jugadores");
    }

    return (
        <>
            <div className='div-configurador-main'>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1%' }}>
                    {['atacante', 'defensivo', 'agil', 'auxiliar', 'equilibrado'].map((role) => (
                        <Button
                            key={role}
                            onClick={() => handleChangeRoles(role)}
                            variant="contained"
                            sx={{
                                backgroundColor: roles[role] ? 'rgb(205, 97, 24)' : 'gray',
                                border: roles[role] ? '3px solid rgb(152, 78, 29)' : '3px solid rgb(93, 93, 93)',
                                ":hover": {
                                    backgroundColor: roles[role] ? 'rgb(248, 116, 28)' : 'rgb(182, 175, 175)',
                                    
                                },
                                color: 'white',
                                width: '30%',
                                padding: '1%',
                                margin: '1%',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                fontSize: '1.2em'
                            }}
                        >
                            {role.charAt(0).toUpperCase() + role.slice(1)}
                        </Button>
                    ))}
                </div>
                <div>
                    
                </div>
            </div>
            <div className='div-configurador-confirmar'>
                <Button
                    onClick={() => goTeams()}
                    variant="contained"
                    sx={{
                        backgroundColor: 'rgb(13, 123, 42)',
                        border: '3px solid rgb(8, 79, 25)',
                        ":hover": {
                            backgroundColor: 'rgb(23, 187, 70)',
                        },
                        color: 'white',
                        width: '100%',
                        padding: '3%',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '1.2em'
                    }}
                >
                    Seleccion de jugadores
                </Button>
            </div>
        </>
    )
}

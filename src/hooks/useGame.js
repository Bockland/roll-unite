import React, { useEffect, useMemo } from 'react'
import { base_pokemones } from '../config/config_pokemones';
import { useDispatch, useSelector } from 'react-redux';
import { setEx, setPool, resetState, setRoles } from '../store/config/configGameSlice';

export const useGame = () => {
    
    const { roles, ex, modo_unico, pool } = useSelector((state) => state.configGame);
    const dispatch = useDispatch();

    const changeEx = (value) => {
        dispatch(setEx({ex: value}));
    }

    const changeRoles = (name, value) => {
        dispatch(setRoles({ roles: { ...roles, [name]: value } }));
    }

    const changePool = (value) => {
        dispatch(setPool({ pool: value } ));
    }

    useEffect(() => {
        filterPool();
    }, [roles, ex]);

    const filterPool = () => {     

        const { atacante, defensivo, agil, auxiliar, equilibrado } = roles;
        const roles_filter = { atacante, defensivo, agil, auxiliar, equilibrado };
       
        let filter_pool = base_pokemones.filter((poke) => ex || !poke.ex);
        filter_pool = filter_pool.filter((poke) => roles_filter[poke.rol]);

        dispatch(setPool({pool: filter_pool}));

    }

    const resetStateConfig = () => {
        dispatch(resetState());
    }

    return {
        roles,
        pool,  
        ex, 
        modo_unico,            

        changeRoles,
        changeEx,
        changePool,
        resetStateConfig
    }
}

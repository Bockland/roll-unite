import { createSlice } from "@reduxjs/toolkit";
import { base_pokemones } from "../../config/config_pokemones";
import { base_config_game } from "../../config/config_game";

const initialState = {
    ...base_config_game,
    pool: base_pokemones    
}

export const configGameSlice =  createSlice({
    name: 'configGame',
    initialState,
    reducers: {
        setRoles: (state, { payload }) => {
            state.roles = payload?.roles;
        },
        setEx: (state, { payload }) => {
            state.ex = payload?.ex;
        },
        setModoUnico: (state, { payload }) => {
            state.modo_unico = payload?.modo_unico;
        },
        setPool: (state, { payload }) => {
            state.pool = payload?.pool;
        },
        resetState: (state) => {
            state.roles = initialState.roles;
            state.pool = initialState.pool;
        }
    }
})

export const { setRoles, setEx, setModoUnico, setPool, resetState } = configGameSlice.actions
export default configGameSlice.reducer

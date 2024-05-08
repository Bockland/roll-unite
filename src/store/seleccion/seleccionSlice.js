import { createSlice } from "@reduxjs/toolkit";

const equipo = [
    {id: 1, name: "", pokemon: ""},
    {id: 2, name: "", pokemon: ""},
    {id: 3, name: "", pokemon: ""},
    {id: 4, name: "", pokemon: ""},
    {id: 5, name: "", pokemon: ""}
]


const initialState = {
    equipo_1: equipo,
    equipo_2: equipo
}

export const seleccionSlice = createSlice({
    name: 'seleccion',
    initialState,
    reducers: {
        setEquipo1: (state, { payload }) => {
            state.equipo_1 = payload?.equipo_1;
        },
        setEquipo2: (state, { payload }) => {
            state.equipo_2 = payload?.equipo_2;
        }
    }
})

export const { setEquipo1, setEquipo2 } = seleccionSlice.actions
export default seleccionSlice.reducer
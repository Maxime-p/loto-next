import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface GridState {
    value: number[][]
}

const initialState: GridState = {
    value: [[]],
}

export const gridSlice = createSlice({
    name: 'grid',
    initialState,
    reducers: {
        addGrid: (state) => {
            state.value.push([])
        },
        setGrids: (state, action: PayloadAction<number[][]>) => {
            state.value = action.payload
        },
        updateNumber: (state, action: PayloadAction<{grid: number, case: number}>) => {
            const currentGrid = [...state.value[action.payload.grid]]
            state.value[action.payload.grid] = currentGrid.includes(action.payload.case) ? currentGrid.filter(item => item != action.payload.case) : currentGrid.concat(action.payload.case)
        },
        clearGrid: (state, action: PayloadAction<number>) => {
            state.value[action.payload] = []
        },
        resetGrids: (state) => {
            state.value = initialState.value
        }
    }
})

export const { addGrid, setGrids, updateNumber, clearGrid, resetGrids } = gridSlice.actions

export default gridSlice.reducer

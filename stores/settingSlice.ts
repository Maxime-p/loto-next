import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SettingState{
    currentGrid: number
    currentColor: string
    modalState: boolean
}

const initialState: SettingState = {
    currentGrid: 0,
    currentColor: "#02885C",
    modalState: false
}

export const settingSlice = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        setCurrentGrid: (state, action: PayloadAction<number>) => {
            state.currentGrid = action.payload
        },
        setCurrentColor: (state, action: PayloadAction<string>) => {
            state.currentColor = action.payload
        },
        swapModalState: (state) => {
            state.modalState = !state.modalState
        }
    }
})

export const { setCurrentGrid, setCurrentColor, swapModalState } = settingSlice.actions

export default settingSlice.reducer

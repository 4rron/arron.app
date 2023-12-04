import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store";

export interface ThemeState {
    darkMode: boolean
}

const initialState: ThemeState = {
    darkMode: false
}

export const themeSlice = createSlice({
    name: "theme",
    initialState: initialState,
    reducers: {
        setDarkMode: (state, action: PayloadAction<boolean>) => {
            state.darkMode = action.payload;
        }
    }
})

export const { setDarkMode } = themeSlice.actions;
export const selectDarkMode = (state: RootState) => state.theme.darkMode;
export default themeSlice.reducer;
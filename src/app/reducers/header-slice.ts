import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type MainNav = "landing" | "software" | "photography"

export interface HeaderState {
    mainNav: MainNav
}

const initialState: HeaderState = {
    mainNav: "landing",
}

export const headerSlice = createSlice({
    name: 'header',
    initialState: initialState,
    reducers: {
        setMainNav: (state, action: PayloadAction<MainNav>) => {
            state.mainNav = action.payload;
        }
    },
})

export const { setMainNav } = headerSlice.actions;
export const getMainNav = (state: RootState) => state.header.mainNav;
export default headerSlice.reducer;
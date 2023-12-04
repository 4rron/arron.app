import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface PhotoReleaseFormState {
    name?: string;
    isMinor?: boolean;
    guardian?: string;
    email?: string;
    date?: string;
    comments?: string;
}

const initialState: PhotoReleaseFormState = {
}

export const photoReleaseFormSlice = createSlice({
    name: "photo-release-form",
    initialState: initialState,
    reducers: {
        setPhotoReleaseName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setPhotoReleaseIsMinor: (state, action: PayloadAction<boolean>) => {
            state.isMinor = action.payload;
        },
        setPhotoReleaseGuardian: (state, action: PayloadAction<string>) => {
            state.guardian = action.payload;
        },
        setPhotoReleaseEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPhotoReleaseDate: (state, action: PayloadAction<string>) => {
            state.date = action.payload;
        },
        setPhotoReleaseComments: (state, action: PayloadAction<string>) => {
            state.comments = action.payload;
        }
    }
})

export const { setPhotoReleaseComments, setPhotoReleaseDate, setPhotoReleaseEmail, setPhotoReleaseGuardian, setPhotoReleaseIsMinor, setPhotoReleaseName } = photoReleaseFormSlice.actions;
export const selectPhotoReleaseForm = (state: RootState) => state.photoReleaseForm;
export default photoReleaseFormSlice.reducer;
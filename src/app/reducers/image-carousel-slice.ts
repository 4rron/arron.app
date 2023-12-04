import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Image {
    file: string,
    iso: number,
    aperture: number,
    shutter: string,
}

export interface ImageCarouselState {
    images?: Array<Image>;
    currentImage: number;
}

const initialState: ImageCarouselState = {
    images: undefined,
    currentImage: 0,
}

export const imageCarouselSlice = createSlice({
    name: 'image-carousel',
    initialState: initialState,
    reducers: {
        addImageCarouselImage: (state, action: PayloadAction<Image>) => {
            state.images?.push(action.payload);
        },
        setImageCarouselImages: (state, action: PayloadAction<Array<Image>>) => {
            state.images = action.payload;
        },
        setImageCarouselCurrentImage: (state, action: PayloadAction<number>) => {
            if(action.payload < state.images!.length){
                state.currentImage = action.payload;
            } else {
                state.currentImage = 0;
            }
        }
    },
})

export const {addImageCarouselImage, setImageCarouselImages, setImageCarouselCurrentImage} = imageCarouselSlice.actions;
export const selectImageCarouselImages = (state: RootState) => state.imageCarousel.images;
export const selectImageCarouselCurrentImage = (state: RootState) => state.imageCarousel.currentImage;
export default imageCarouselSlice.reducer;
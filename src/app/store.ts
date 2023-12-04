import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import imageCarouselSlice from './reducers/image-carousel-slice';
import photoReleaseFormSlice from './reducers/photo-release-form-slice';
import headerSlice from './reducers/header-slice';
import themeSlice from './reducers/theme-slice';

export const store = configureStore({
  reducer: {
    header: headerSlice,
    imageCarousel: imageCarouselSlice,
    photoReleaseForm: photoReleaseFormSlice,
    theme: themeSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

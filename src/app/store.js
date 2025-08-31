import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '../components/Home/ImageSlider/ImageSlice';

const store = configureStore({
  reducer: {
    imagesR: imageReducer,
  },
});

export default store;

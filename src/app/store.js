import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '../components/Home/ImageSlider/ImageSlice';

const store = configureStore({
  reducer: {
    cartsR: imageReducer,
  },
});

export default store;

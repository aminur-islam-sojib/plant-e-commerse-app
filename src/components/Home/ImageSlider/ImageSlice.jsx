import { createSlice } from '@reduxjs/toolkit';
import img1 from '../../../assets/image1.png';
import img2 from '../../../assets/image2.png';
import img3 from '../../../assets/image3.png';

const imageSlice = createSlice({
  name: 'images',
  initialState: {
    images: [img1, img2, img3],
  },
  reducers: {},
});

// export const {} = imageSlice.actions;

export default imageSlice.reducer;

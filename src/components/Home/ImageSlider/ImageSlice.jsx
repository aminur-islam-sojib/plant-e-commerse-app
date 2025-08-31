import { createSlice } from '@reduxjs/toolkit';
import img1 from '../../../assets/image1.jpg';
import img2 from '../../../assets/image2.jpg';
import img3 from '../../../assets/image3.jpg';

const imageSlice = createSlice({
  name: 'images',
  initialState: {
    cards: [
      {
        id: 1,
        title: 'The Potted Head',
        subtitle:
          'Perfect for beginners or anyone looking for an easy-to-care-for plant',
        price: 50,
        url: img1,
      },
      {
        id: 2,
        title: 'The Snake Plant',
        subtitle: 'A hardy plant that can tolerate low light and neglect',
        price: 30,
        url: img2,
      },
      {
        id: 3,
        title: 'The Fiddle Leaf Fig',
        subtitle: 'A trendy plant with large, glossy leaves',
        price: 70,
        url: img3,
      },
    ],
  },
  reducers: {},
});

// export const {} = imageSlice.actions;

export default imageSlice.reducer;

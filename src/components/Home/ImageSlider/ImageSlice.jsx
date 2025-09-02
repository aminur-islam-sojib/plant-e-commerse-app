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
        name: 'Potted',
        subtitle:
          'Perfect for beginners or anyone looking for an easy-to-care-for plant',
        price: 50,
        url: img1,
      },
      {
        id: 2,
        name: 'Snake',
        title: 'The Snake Plant',
        subtitle: 'A hardy plant that can tolerate low light and neglect',
        price: 30,
        url: img2,
      },
      {
        id: 3,
        name: 'Fiddle',
        title: 'The Fiddle Leaf Fig',
        subtitle: 'A trendy plant with large, glossy leaves',
        price: 70,
        url: img3,
      },
    ],

    carts: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.cards.find((card) => card.id === action.payload.id);
      if (item) {
        state.carts.push({ ...item, quantity: 1 });
      }
    },
  },
});

export const { addToCart } = imageSlice.actions;

export default imageSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import im4 from '../../../assets/image4.png';
import im5 from '../../../assets/image5.png';
import im6 from '../../../assets/image6.png';

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
        url: im4,
      },
      {
        id: 2,
        name: 'Snake',
        title: 'The Snake Plant',
        subtitle: 'A hardy plant that can tolerate low light and neglect',
        price: 30,
        url: im5,
      },
      {
        id: 3,
        name: 'Fiddle',
        title: 'The Fiddle Leaf Fig',
        subtitle: 'A trendy plant with large, glossy leaves',
        price: 70,
        url: im6,
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

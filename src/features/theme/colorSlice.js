import { createSlice } from '@reduxjs/toolkit';

export const booksSlice = createSlice({
  name: 'color',
  initialState: 'pink',
  reducers: {
    changeColor: (state, action) => {
      state = action.payload;
    },
  },
});

export const { changeColor } = booksSlice.actions;

export default booksSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    booksArray: [],
  },
  reducers: {},
});

export default booksSlice.reducer;
